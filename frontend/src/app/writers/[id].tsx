

interface Post {
    id: string;
    title: string;
    content: string;
}

interface Writer {
    id: string;
    name: string;
}

interface WriterPageProps {
    writer: Writer;
    posts: Post[];
}

const WriterPage: React.FC<WriterPageProps> = ({ writer, posts }) => {
    // You can remove the line below since you're not using 'id'
    // const { id } = router.query;

    if (!writer || !posts) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{writer.name}</h1>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export async function getServerSideProps({ params }: { params: { id: string } }) {
    const writerId = params.id;

    // Fetch the writer's data and posts
    const writerResponse = await fetch(`http://localhost:5001/writers/${writerId}`);
    const postsResponse = await fetch(`http://localhost:5001/writers/${writerId}/posts`);

    if (!writerResponse.ok || !postsResponse.ok) {
        return { notFound: true }; // Handle error by returning a 404 page
    }

    const writer = await writerResponse.json();
    const posts = await postsResponse.json();

    return { props: { writer, posts } };
}

export default WriterPage;
