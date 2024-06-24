import Hero from "../components/Hero";
import NoticeCard from "../components/NoticeCard";
import ResultCard from "../components/ResultCard";
import ScrollingNotice from "../components/ScrollingNotice";
import Statistics from "../components/Statistics";
import Teachers from "../components/Teachers";
import Testimonial from "../components/Testimonial";

export default function Homepage() {
  return (
    <>
      <ScrollingNotice />
      <Hero />
      <section className="py-20 bg-body">
        <main className="px-5">
          <h2 className="font-bold text-[22px] text-center">
            সাম্প্রতিক নোটিশ ও ফলাফল
          </h2>

          <div className="mt-5 grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6 border border-borderColor h-fit">
              <div className="bg-brandColor text-white font-semibold px-4 py-2">
                নোটিশ বোর্ড
              </div>
              <NoticeCard />
            </div>

            <div className="col-span-12 lg:col-span-6 border border-borderColor h-fit">
              <div className="bg-brandColor text-white font-semibold px-4 py-2">
                ফলাফল
              </div>

              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
            </div>
          </div>
        </main>
      </section>

      <Statistics />
      <Teachers />
      <Testimonial />
    </>
  );
}
