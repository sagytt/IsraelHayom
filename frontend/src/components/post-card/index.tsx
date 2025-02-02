"use client";

import Link from "next/link";
// import Image from "next/image";

interface Post {
  id: string;
  title: string;
  content: string;
  writerId: string;
  createdAt: string;
  postUrl: string;
}

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="w-full font-arial" dir="rtl">
      <div className="writer-card bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Link
                href={`/writers/${post?.id}`}
                className="text-[22px] text-[#181818] hover:text-[#FF5252] transition-colors font-bold"
              >
                {post?.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
