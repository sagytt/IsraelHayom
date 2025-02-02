import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Writer } from '../writers/writer.schema';

@Schema()
export class Post extends Document {
    @Prop({ required: true, unique: true })
    id: number;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    createdAt: Date;

    @Prop({ required: true })
    postUrl: string;

    @Prop({ type: mongoose.Schema.Types.Number, ref: 'Writer', required: true })
    writerId: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);