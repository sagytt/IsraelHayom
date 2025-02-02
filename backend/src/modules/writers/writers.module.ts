import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WritersController } from './writers.controller';
import { WritersService } from './writers.service';
import { Writer, WriterSchema } from './writer.schema';
import { Post, PostSchema } from '../posts/post.schema';;

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Writer.name, schema: WriterSchema },
      { name: Post.name, schema: PostSchema },
    ]),
  ],
  controllers: [WritersController],
  providers: [WritersService],
})
export class WritersModule {}