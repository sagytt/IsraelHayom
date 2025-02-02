import { GetServerSideProps } from 'next';
// import { useRouter } from 'next/router';
import React from 'react';

type WriterProps = {
    writer: {
        id: string;
        name: string;
        imageUrl: string;
        bio: string;
    };
};

const WriterProfile: React.FC<WriterProps> = ({ writer }) => {
    if (!writer) {
        return <div>Writer not found</div>;
    }

    return (
        <div >
            <h1>{writer.name}</h1>
            <img style={{ width: '50px' }} src={writer.imageUrl} alt={writer.name} />
    {/* Render other writer details */}
    </div>
);
};

// This function will fetch the data server-side
export const getServerSideProps: ({params}: { params: any }) => Promise<{ notFound: boolean } | { props: { writer: unknown } }> = async ({ params }) => {
    const { id } = params as { id: string };

    // Fetch data for the writer using the ID from the URL
    const res = await fetch(`http://localhost:5001/writers/${id}`);
    const writer = await res.json();
    // If writer not found, return a 404 page
    if (!writer) {
        return { notFound: true };
    }

    return {
        props: {
            writer,
        },
    };
};

export default WriterProfile;
