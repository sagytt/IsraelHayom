import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from '../../src/components/post-card';
import { useParams } from "next/navigation";

interface Post {
  _id: string;
  title: string;
  content: string;
  writerId: string;
  createdAt: string;
  postUrl: string;
  name: string; // Added property for the writer's name
}

const WriterPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      if (!params || !params.id) {
        setError('מזהה הכותב חסר');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`http://localhost:5001/posts/${params.id}`);
        // If it's a single post, wrap it in an array
        setPosts(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const errorMessage = err.response?.data?.message;
          if (errorMessage) {
            setError(errorMessage);
          } else if (err.response?.status === 404) {
            setError('כותב לא נמצא. אנא בדוק את המזהה ונסה שוב');
          } else if (err.response?.status === 400) {
            setError('מזהה כותב לא חוקי. אנא בדוק את המזהה ונסה שוב');
          } else {
            setError('אירעה שגיאה בעת טעינת הפוסטים. אנא נסה שוב מאוחר יותר');
          }
        } else {
          setError('אירעה שגיאה לא צפויה. אנא נסה שוב מאוחר יותר');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [params]);

// Conditional Rendering
  if (loading) {
    return (
        <div>Loading...</div>
    );
  }

  if (error) {
    return (
        <div>Error: {error}</div>
    );
  }


  return (
      <main className="min-h-screen py-16 bg-gradient-to-r from-[#FFFBF0] via-[#FEE9E1] to-[#FFDEE9]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 font-arial" dir="rtl">
          <h2 className="text-[36px] px-6 py-2 border-l-4 border-[#FF5252] text-[#333333] mb-12 font-extrabold leading-tight tracking-tight">
            הפוסט
          </h2>
          {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
              </div>
          ) : (
              <div className="bg-white border border-gray-300 rounded-lg p-10 shadow-xl text-center max-w-2xl mx-auto">
                <p className="text-[18px] text-[#777777] font-medium">אין פוסטים זמינים עבור כותב זה</p>
              </div>
          )}
        </div>
      </main>
  );
};

export default WriterPosts;
