import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './post.schema';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel('Post') private readonly postModel: Model<Post>,
    ) {}

    // Fetch all posts (optional)
    async getAllPosts(): Promise<Post[]> {
        return await this.postModel.find().exec();
    }

    // Fetch a single post by ID
    async getPostById(id: string): Promise<Post> {
        const post = await this.postModel.findById(id).exec();  // Use the injected model here
        if (!post) {
            throw new NotFoundException(`Post with ID ${id} not found`);
        }
        return post;
    }
}
