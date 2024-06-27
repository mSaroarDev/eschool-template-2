import { PhoneForwarded } from "lucide-react";
import { mySchoolId } from "../utils/getApiUrl";
import { useEffect, useState } from "react";
import { getSchoolInfo } from './../libs/schoolAPI';
import { useSEOInfo } from "../seo/useSeoInfo";
import SEOPage from "../components/SEOPage";

export default function ContactPage() {

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

   const map_code = data?.school_information?.google_map_code;

   // seo
  const getSeoInfo = useSEOInfo();

    return (
      <>
      {/* seo start */}
      <SEOPage title={`Contact Us - ${getSeoInfo && getSeoInfo?.schoolInfo?.name_en}`} />
      {/* seo end */}


        <section className="bg-white mt-2">
          <main>
            <div className="bg-lightBg px-5 py-10 text-center text-2xl font-bold">
              <h1>“যোগাযোগ করুন”</h1>
            </div>
          </main>
  
          <main className="px-5">
          <div className="border border-brandColor overflow-hidden mt-2">
        <div className="px-3 py-2 text-[18px] bg-brandColor text-white">
          যোগাযোগ
        </div>
          <div className="p-5 bg-custom text-[17px]">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <PhoneForwarded className="w-4 h-4" />
              <span>{data && data?.contact}</span>
            </p>

            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                />
              </svg>

              <span>{data && data?.school_information?.email}</span>
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                />
              </svg>

              <span>{data && data?.institute_address}</span>
            </p>
          </div>
          </div>
        </div>

        <div className="border border-brandColor overflow-hidden mt-2 ">
        <div className="px-3 py-2 text-[18px] bg-brandColor text-white">
          গুগল ম্যাপ
        </div>

        <div className="p-5 bg-custom text-[17px]">
          <div dangerouslySetInnerHTML={{ __html: map_code }} />
        </div>
      </div>
          </main>
        </section>
      </>
    );
  }
  