import WritersCarousel from '../components/writers-carousel/WritersCarousel';

export default function Home() {

    return (
        <main className="min-h-screen py-16">
            <div className="w-full max-w-[1200px] mx-auto px-4 font-arial" dir="rtl">
                <h2 className="text-[28px] px-4 border-r-[8px] border-[#FF5252] text-[#181818] mb-8 font-bold">
                    כותבי הטורים
                </h2>
                <WritersCarousel />
            </div>
        </main>
    );
}
