import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WritersModule } from './modules/writers/writers.module';
import {PostsModule} from "./modules/posts/posts.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/israelhayom'),
    WritersModule,
    PostsModule,
  ],
})
export class AppModule {}