export class WriterWithLatestPostDto {
  imageUrl: string;
  name: string;
  pageUrl: string;
  latestPost: {
    createdAt: Date;
    postUrl: string;
    _id: string;  // Ensure this is string
    title: string;
  };
  id: any;
}
