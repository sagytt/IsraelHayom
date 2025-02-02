import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')  // Base route: /posts
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    async getAllPosts() {
        return await this.postsService.getAllPosts();
    }

    @Get(':id') // Handles GET requests to /posts/:id
    async getPost(@Param('id') id: string) {
        console.log('Controller reached. Fetching post with ID:', id);
        const post = await this.postsService.getPostById(id);
        if (!post) {
            throw new NotFoundException(`Post with ID ${id} not found`);
        }
        return post;
    }
}
