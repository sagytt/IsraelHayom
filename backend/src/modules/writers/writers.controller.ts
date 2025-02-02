import {Controller, Get, Post, Body, Param, NotFoundException} from '@nestjs/common';
import { WritersService } from './writers.service';
import { Writer } from './writer.schema';
import { Post as BlogPost } from '../posts/post.schema';
import { WriterWithLatestPostDto } from './dto/writer-with-latest-post.dto';

@Controller('writers')
export class WritersController {
  constructor(private readonly writersService: WritersService) {}

  @Get()
  async findAll(): Promise<Awaited<{
    imageUrl: string;
    name: string;
    pageUrl: string; latestPost: { createdAt: Date; postUrl: string; _id: unknown; title: string }; id: any }>[]> {
    return this.writersService.findAll();
  }

  @Get(':id/posts')
  async getWriterPosts(@Param('id') writerId: string): Promise<BlogPost[]> {
    return this.writersService.getWriterPosts(writerId);
  }

  @Post()
  async createWriter(@Body() writerData: Partial<Writer>): Promise<Writer> {
    return this.writersService.createWriter(writerData);
  }

  @Get(':id')  // This handles GET requests to /writer/:id
  async getWriter(@Param('id') id: string) {
    console.log('Fetching writer with ID:', id);
    const writer = await this.writersService.getWriterById(id);
    if (!writer) {
      throw new NotFoundException(`Writer with ID ${id} not found`);
    }
    return writer;
  }

  @Post('post')
  async createPost(@Body() postData: Partial<BlogPost>): Promise<BlogPost> {
    return this.writersService.createPost(postData);
  }
}