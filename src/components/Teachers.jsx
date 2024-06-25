import TeacherListCard from "./TeacherListCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mySchoolId } from "../utils/getApiUrl";
import { useEffect, useState } from "react";
import { getAllTeachers } from "../libs/teacherAPI";

export default function Teachers() {

  // get school id
  const schoolId = mySchoolId();

  // fetch school info
  const [items, setItems] = useState();
  const fetchData = async () => {
    const res = await getAllTeachers(schoolId)

    if(res.ok){
      const data = await res.json()
      setItems(data.data)
    } else {
      console.log("Internal server error");
    }
  }

  useEffect(()=> {
    fetchData();
  }, [])

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
              {items && items.map((item, i) => (
                <TeacherListCard key={i} data={item} classes="w-full max-w-[250px] h-[320px] mx-auto" />
              ))}
            </Slider>
          </div>
        </main>
      </section>
    </>
  );
}
