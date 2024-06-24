import Carousel from "react-elastic-carousel";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  const items= [
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <main className="px-5">
          <h2 className="font-bold text-[22px] text-center">
            শুভাকাঙ্খীরা আমাদের ব্যপারে কি বলেন
          </h2>

          <div className="mt-5">
            <Carousel pagination={false} showArrows={true} itemsToShow={1}  enableAutoPlay autoPlaySpeed={3000}>
              {items.map((item) => (
                <TestimonialCard />
              ))}
            </Carousel>
          </div>
        </main>
      </section>
    </>
  );
}
