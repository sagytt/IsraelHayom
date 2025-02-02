import { MongoClient } from 'mongodb';

async function seed() {
  const uri = 'mongodb://localhost:27017/israelhayom';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('israelhayom');

    // Clear existing collections
    await db.collection('writers').deleteMany({});
    await db.collection('posts').deleteMany({});

    // Create writers
    const writers = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Writer ${i + 1}`,
      imageUrl: `https://api.dicebear.com/7.x/lorelei/svg`,
      pageUrl: `https://example.com/writers/${i + 1}`,
    }));

    await db.collection('writers').insertMany(writers);

    // Create posts
    const posts = writers.flatMap((writer) =>
      Array.from({ length: 3 }, (_, i) => ({
        id: writer.id * 100 + i + 1,
        title: `Post ${i + 1} by Writer ${writer.id}`,
        createdAt: new Date(Date.now() - Math.random() * 10000000000),
        postUrl: `https://example.com/posts/${writer.id * 100 + i + 1}`,
        writerId: writer.id,
      })),
    );

    await db.collection('posts').insertMany(posts);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seed();