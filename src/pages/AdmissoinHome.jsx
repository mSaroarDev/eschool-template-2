import { useEffect, useState } from "react";
import { mySchoolId } from "../utils/getApiUrl";
import { getSchoolInfo } from "../libs/schoolAPI";
import { useSEOInfo } from "../seo/useSeoInfo";
import SEOPage from './../components/SEOPage';

export default function AdmissoinHome() {
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

  // seo
  const getSeoInfo = useSEOInfo();

  return (
    <>
      {/* seo start */}
      <SEOPage title={`Admission Home - ${getSeoInfo && getSeoInfo?.schoolInfo?.name_en}`} />
      {/* seo end */}


      <main className="px-5">
        {data && data?.admission_corner?.isOpen == "false" ? (
          <div className="my-24">
            <div className="flex flex-col items-center justify-center bg-red-500 text-white py-2">
              অ্যাডমিশন সিস্টেম বন্ধ আছে।
            </div>
          </div>
        ) : (
          <>
            <div className="border border-dotted border-gray-500 overflow-hidden mt-2">
              <div className="px-3 py-2 bg-brandColor text-white text-[16px] text-center">
                অনলাইন অ্যাডমিশন সিস্টেম
              </div>

              <div className="p-5 bg-custom text-[17px] text-justify">
                <p className="text-center text-red-500">
                  অনলাইন অ্যাডমিশন সিস্টেম এ আপনাকে স্বাগতম। সাবধানতার সাথে
                  অ্যাডমিশন ফরমটি পূরন করবেন। <br /> ফরম পুরন ও অ্যাডমিশন
                  সংক্রান্ত বিস্তারিত জানতে অ্যাডমিশন এর{" "}
                  <a
                    href={`/admission/rules/1`}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    শর্তাবলী দেখুন।
                  </a>
                </p>
              </div>
            </div>{" "}
          </>
        )}
      </main>
    </>
  );
}
