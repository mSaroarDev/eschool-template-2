import { History, Info } from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mySchoolId } from "../utils/getApiUrl";
import { useEffect, useState } from "react";
import { getAllTeachers } from "./../libs/teacherAPI";

export default function Hero() {
  const heroImages = [
    {
      id: 1,
      image: "image",
    },
    {
      id: 2,
      image: "image",
    },
    {
      id: 3,
      image: "image",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // head teacher
  // get school id
  const schoolId = mySchoolId();

  const [allTecherData, setAllTecherData] = useState(null);
  const fetchAllTeacherData = async () => {
    const res = await getAllTeachers(schoolId);

    if (res.ok) {
      const data = await res.json();
      setAllTecherData(data.data);
    } else {
      console.log("Internal server error");
    }
  };

  useEffect(() => {
    fetchAllTeacherData();
  }, []);

  const headTecher =
    allTecherData &&
    allTecherData.filter(
      (teacher) =>
        teacher?.designation == "প্রধান শিক্ষক" ||
        teacher?.designation == "head teacher" ||
        teacher?.designation == "head Teacher" ||
        teacher?.designation == "Head teacher" ||
        teacher?.designation == "Head Teacher"
    )[0];

  return (
    <>
      <section className="mt-5">
        <main className="px-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6 lg:col-span-2 flex flex-col justify-between">
              <Link
                target="_blank"
                to="/admission/home"
                className="bg-brandColor text-white flex flex-col items-center justify-center gap-2 py-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>

                <span>অনলাইন এডমিশন</span>
              </Link>

              <Link
                to="/notices"
                className="bg-brandColor text-white flex flex-col items-center justify-center gap-2 py-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                  />
                </svg>

                <span>একাডেমিক নোটিশ</span>
              </Link>

              <Link
                to="/about"
                className="bg-brandColor text-white flex flex-col items-center justify-center gap-2 py-3"
              >
                <History />
                <span>প্রতিষ্ঠানের ইতিহাস</span>
              </Link>

              <Link
                to="/about"
                className="bg-brandColor text-white flex flex-col items-center justify-center gap-2 py-3"
              >
                <Info />
                <span>সংক্ষিপ্ত বিবরনী</span>
              </Link>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6 h-[352px] w-full">
              <Slider {...settings}>
                {heroImages.map((item, i) => (
                  <div key={i} className="w-full h-full">
                    <img
                      src="/school.webp"
                      alt="Photo"
                      className="w-full h-[352px] object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-5 shadow-lg flex flex-col items-center justify-center gap-2">
              <div className="w-[100px] h-[100px] rounded-full ring ring-brandColor overflow-hidden">
                <img
                  src={(headTecher && headTecher?.image) || "/placeholder.jpg"}
                  alt="President"
                />
              </div>

              <h1 className="mt-4 font-bold text-[16px]">
                প্রধান শিক্ষকের বানী
              </h1>
              <p className="text-center italic">
                বাংলাদেশ আমার স্বপ্ন। আমার জন্ম এদেশের মাটিতে। এই দেশের মাটিতে
                নাফরমান চলাচল করলে আমার মাতৃভূমির অসম্মান হয়।
              </p>
              <div className="mt-3 text-center">
                <h2 className="font-bold">
                  {headTecher?.designation == "Head Teacher"
                    ? `${headTecher?.name_bn}`
                    : headTecher?.designation == "Head teacher"
                    ? `${headTecher?.name_bn}`
                    : headTecher?.designation == "head teacher"
                    ? `${headTecher?.name_bn}`
                    : headTecher?.designation == "head Teacher"
                    ? `${headTecher?.name_bn}`
                    : headTecher?.designation == "প্রধান শিক্ষক"
                    ? `${headTecher?.name_bn}`
                    : `Not Updated Yet`}
                </h2>
                <h3>প্রধান শিক্ষক</h3>
                <h3>
                  {headTecher && headTecher?.institute?.name_bn},{" "}
                  {headTecher && headTecher?.institute?.institute_address}
                </h3>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
