import { useEffect, useState } from "react";
import { mySchoolId } from "../utils/getApiUrl";
import { getSchoolInfo } from "./../libs/schoolAPI";
import { useSEOInfo } from "../seo/useSeoInfo";
import SEOPage from "../components/SEOPage";

export default function AboutPage() {
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
      <SEOPage title={`About Us - ${getSeoInfo && getSeoInfo?.schoolInfo?.name_en}`} />
      {/* seo end */}


      <section className="bg-white mt-2">
        <main>
          <div className="bg-lightBg px-5 py-10 text-center text-2xl font-bold">
            <h1>“আমাদের সম্পর্কে”</h1>
          </div>
        </main>

        <main className="px-5">
          <p className="text-black p-10 text-justify">
            {(data && data?.school_information?.school_about) ||
              `পরিচিতি আপডেট করতে এই মেনুতে যান "ড্যাশবোর্ড > সেটিংস > এডিট পরিচিতি"`}
          </p>
        </main>
      </section>
    </>
  );
}
