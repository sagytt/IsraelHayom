import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose'; // Import Types for ObjectId
import { Writer, WriterDocument } from './writer.schema';
import { Post } from '../posts/post.schema';
import { WriterWithLatestPostDto } from './dto/writer-with-latest-post.dto';

@Injectable()
export class WritersService {
  constructor(
    @InjectModel(Writer.name) private writerModel: Model<WriterDocument>,
    @InjectModel(Post.name) private postModel: Model<Post>,
  ) {}

  async findAll(): Promise<Awaited<{ imageUrl: string; name: string; pageUrl: string; latestPost: { createdAt: Date; postUrl: string; _id: unknown; title: string }; id: any }>[]> {
    const writers = await this.writerModel.find().exec();

    if (!writers || writers.length === 0) {
      throw new NotFoundException('No writers found in the system');
    }

    const writersWithPosts = await Promise.all(
      writers.map(async (writer) => {
        const latestPost = await this.postModel
          .findOne({ writerId: writer.id })
          .sort({ createdAt: -1 })
          .exec();

        return {
          id: writer._id,
          name: writer.name,
          imageUrl: writer.imageUrl || `https://api.dicebear.com/7.x/lorelei/svg?seed=${writer.id}`,
          pageUrl: `/writers/${writer.id}`,
          latestPost: latestPost
            ? {
                _id: latestPost._id,
                title: latestPost.title,
                createdAt: latestPost.createdAt,
                postUrl: `/posts/${latestPost.id}`,
              }
            : null,
        };
      }),
    );

    return writersWithPosts;
  }

  async getWriterPosts(writerId: string): Promise<Post[]> {
    if (!writerId) {
      throw new BadRequestException('Writer ID is required');
    }

    // Check if the writerId is a valid MongoDB ObjectId
    if (!Types.ObjectId.isValid(writerId)) {
      throw new BadRequestException('Invalid writer ID format');
    }

    // Query the writer by _id (which is a MongoDB ObjectId)
    const writer = await this.writerModel.findById(writerId).exec();
    if (!writer) {
      throw new NotFoundException(`Writer with ID ${writerId} not found. Please check the writer ID and try again`);
    }

    // Get posts for the writer
    const posts = await this.postModel
        .find({ writerId: writerId }) // writerId is now a string representing the ObjectId
        .sort({ createdAt: -1 })
        .exec();

    if (!posts || posts.length === 0) {
      throw new NotFoundException(`No posts found for writer ${writer.name} (ID: ${writerId})`);
    }

    return posts;
  }


  async createWriter(writerData: Partial<Writer>): Promise<Writer> {
    if (!writerData.name) {
      throw new BadRequestException('Writer name is required');
    }

    const lastWriter = await this.writerModel
      .findOne()
      .sort({ id: -1 })
      .exec();

    const nextId = lastWriter ? lastWriter.id + 1 : 1;
    const writer = new this.writerModel({
      ...writerData,
      id: nextId,
    });

    return writer.save();
  }

  async createPost(postData: Partial<Post>): Promise<Post> {
    if (!postData.writerId) {
      throw new BadRequestException('Writer ID is required for creating a post');
    }

    const writer = await this.writerModel.findOne({ id: postData.writerId }).exec();
    if (!writer) {
      throw new NotFoundException(`Cannot create post. Writer with ID ${postData.writerId} not found`);
    }

    const post = new this.postModel(postData);
    return await post.save();
  }

  async getWriterById(id: string): Promise<Writer> {
    const writer = await this.writerModel.findById(id).exec();
    if (!writer) {
      throw new NotFoundException(`Writer with ID ${id} not found`);
    }
    return writer;
  }
}