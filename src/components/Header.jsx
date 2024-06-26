import { useEffect, useState } from "react";
import { mySchoolId } from "../utils/getApiUrl";
import { getSchoolInfo } from "../libs/schoolAPI";
import { Link } from "react-router-dom";

export default function Header() {
  // get school id
  const schoolId = mySchoolId();

  // fetch school info
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await getSchoolInfo(schoolId);

    if (res.ok) {
      const data = await res.json();
      setData(data.data);
    } else {
      console.log("Internal server error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-gray-100 py-1">
        <main>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link to="/">হোমপেজ</Link> • 
              <Link to="/">শিক্ষক লগিন</Link>
            </div>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <span>example@gmail.com</span>
            </p>
          </div>
        </main>
      </div>

      <div className="bg-white py-2">
        <main className="px-5 flex items-center justify-between">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-5 lg:mb-0">
            <div className="w-[120px] h-[120px]">
              <img src={(data && data?.school_information?.logo) || "/logo.png"} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="font-bold text-[28px]">{data && data?.name_bn} (EIIN: {data && data?.eiin})</h1>
              <h1 className="text-[18px]">{data && data?.institute_address}</h1>
            </div>
          </div>

          <div className="hidden lg:block w-[130px] h-[130px]">
            <img src="/mujib100.svg" alt="মুজিব শতবর্ষ" />
          </div>
        </main>
      </div>
    </>
  );
}
