import { Link } from "react-router-dom";
import { mySchoolId } from "../utils/getApiUrl";
import { useEffect, useState } from "react";
import { getAllNotices } from "./../libs/noticeAPI";

export default function ScrollingNotice() {
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

  const notices = data && data.slice(0, 5);

  return (
    <>
      <main className="px-5 mt-5">
        <div className="flex items-center gap-0">
          <div className="bg-brandColor text-white px-5 py-2">নোটিশ সমুহ</div>
          <div className="flex-1 bg-lightBg pr-5 py-1">
            <marquee>
              {notices &&
                notices.map((item, i) => (
                  <Link to={`/notice/details/${item?._id}`} key={i} className="mr-20 hover:underline text-[15px] font-semibold text-black">
                    » {item.title}
                  </Link>
                ))}
            </marquee>
          </div>
        </div>
      </main>
    </>
  );
}
