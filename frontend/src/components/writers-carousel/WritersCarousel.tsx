"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";

interface Writer {
  id: string;
  name: string;
  imageUrl: string;
  pageUrl: string;
  latestPost: {
    _id: string;
    title: string;
    createdAt: string;
    postUrl: string;
  };
}

const WritersCarousel = () => {
  const [writers, setWriters] = useState<Writer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWriters = async () => {
      try {
        const response = await axios.get('http://localhost:5001/writers');
        setWriters(response.data);
      } catch (err) {
        setError('Failed to fetch writers');
        console.error('Error fetching writers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWriters();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error state
  }

  return (
      <div className="w-full font-arial relative" dir="rtl">
        <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView="auto"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            dir="rtl"
            className="writers-carousel px-10"
        >
          {writers.map((writer) => (
              <SwiperSlide key={writer.id} className="!w-[250px] md:!w-[380px]">
                <div className="writer-card bg-white rounded-lg shadow-lg p-4">
                  <div className="flex flex-col md:flex-row items-center gap-5">
                    <div className="relative w-[80px] h-[80px] flex-shrink-0">
                      <Image
                          src={writer.imageUrl}
                          alt={writer.name}
                          fill
                          className="object-cover rounded-full border-2 border-[#FF5252]"
                          onError={(e) => e.target.src = 'path/to/default-image.jpg'} // Handle image errors
                      />
                    </div>
                    <div className="flex flex-col max-md:items-center w-full">
                      <div className="flex items-center gap-4 mb-2">
                        <Link
                            href={`/writers/${writer.id}`}
                            className="text-[22px] text-[#181818] hover:text-[#FF5252] transition-colors font-bold"
                        >
                          {writer.name}
                        </Link>
                      </div>
                      <Link
                          href={`/posts/${writer?.latestPost?._id}`}
                          className="block text-[16px] mb-2 text-[#999999] font-bold line-clamp-3 hover:text-[#181818] transition-colors"
                      >
                        {writer?.latestPost?.title}
                      </Link>
                      <div className="flex items-center gap-2 justify-end">
                        <Link
                            href={`/writers/${writer.id}`}
                            className="text-[14px] text-[#FF5252] font-bold hover:text-[#181818] transition-colors"
                        >
                          קרא עוד ⯇
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev !text-[#FF5252] !-left-5 xl:!-left-8 font-bold after:!text-2xl hover:!text-[#181818] transition-colors"></div>
        <div className="swiper-button-next !text-[#FF5252] !-right-5 xl:!-right-8 font-bold after:!text-2xl hover:!text-[#181818] transition-colors"></div>
      </div>
  );
};

export default WritersCarousel;
