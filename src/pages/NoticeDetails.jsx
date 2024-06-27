import { useEffect, useState } from "react";
import { getNoticeDetails } from "../libs/noticeAPI";
import { useParams } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";

export default function NoticeDetails() {
  // get id
  const { id } = useParams();

  // fetch school info
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const res = await getNoticeDetails(id);

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
      <main>
        {data === null && <Spinner />}
        <div className="border border-gray-500 overflow-hidden mt-2 mb-5">
          <div className="px-3 py-1 bg-brandColor text-white font-bold text-[16px]">
            নোটিশ বিস্তারিত
          </div>

          <div className="p-5">
            <h1 className="mb-3 text-[15px]">
              {data && data?.title}
            </h1>
            <p className="text-[16px]">{data && data?.description}</p>
          </div>
        </div>
      </main>
    </>
  );
}
