import Carousel from "react-elastic-carousel";
import TeacherListCard from "./TeacherListCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Teachers() {
  const items= [
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className="py-20 bg-body">
        <main className="px-5">
          <h2 className="font-bold text-[22px] text-center">
            আমাদের শিক্ষকমন্ডলী
          </h2>

          <div className="mt-5">
          <Slider {...settings}>
              {items.map((item) => (
                <TeacherListCard classes="w-full max-w-[250px] h-[320px] mx-auto" />
              ))}
            </Slider>
          </div>
        </main>
      </section>
    </>
  );
}
