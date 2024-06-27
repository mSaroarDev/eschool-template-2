import { useEffect, useState } from "react";
import NoticeCard from "../components/NoticeCard";
import { mySchoolId } from "../utils/getApiUrl";
import { getAllNotices } from "../libs/noticeAPI";

export default function Notices() {
    // get school id
  const schoolId = mySchoolId();

  // fetch school info
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await getAllNotices(schoolId);

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

  const notices = data && data.slice(0, 20);

  return (
    <>
        <section className="bg-white mt-2">
        <main>
          <div className="bg-lightBg px-5 py-10 text-center text-2xl font-bold">
            <h1>“একাডেমিক নোটিশসমূহ”</h1>
          </div>
        </main>

        <main className="px-5 mt-2 mb-5">
        <div className="col-span-12 lg:col-span-6 border border-borderColor h-fit">
              <div className="bg-brandColor text-white font-semibold px-4 py-2">
                নোটিশ বোর্ড
              </div>
              {notices && notices.map((item)=> <NoticeCard key={item?._id} data={item} />)}
            </div>
        </main>
      </section>
    </>
  )
}