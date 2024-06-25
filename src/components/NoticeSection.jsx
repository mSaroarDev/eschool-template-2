import { useEffect, useState } from "react";
import { mySchoolId } from "../utils/getApiUrl";
import { getAllNotices } from "../libs/noticeAPI";
import NoticeCard from "./NoticeCard";
import ResultCard from "./ResultCard";
import { getAllResults } from './../libs/restultAPI';

export default function NoticeSection() {
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

  // get results

   // fetch school info
   const [results, setResults] = useState();
   const fetchResult = async () => {
     const res = await getAllResults(schoolId)
 
     if(res.ok){
       const data = await res.json()
       setResults(data.data)
     } else {
       console.log("Internal server error");
     }
   }
 
   useEffect(()=> {
    fetchResult();
   }, [])

   const recentResults = results && results.slice(0,5)

  return (
    <>
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
              {notices && notices.map((item)=> <NoticeCard key={item?._id} data={item} />)}
            </div>

            <div className="col-span-12 lg:col-span-6 border border-borderColor h-fit">
              <div className="bg-brandColor text-white font-semibold px-4 py-2">
                ফলাফল
              </div>

              {recentResults && recentResults?.map((item,i)=> <ResultCard key={i} data={item} index={i} />)}
            </div>
          </div>
        </main>
      </section>
    </>
  )
}