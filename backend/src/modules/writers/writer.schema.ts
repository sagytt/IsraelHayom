import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WriterDocument = Writer & Document;

@Schema({ timestamps: true })
export class Writer {
  @Prop({ required: true, unique: true, type: Number })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop()
  imageUrl: string;

  @Prop()
  pageUrl: string;
}

export const WriterSchema = SchemaFactory.createForClass(Writer);