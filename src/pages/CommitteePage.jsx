import { useEffect, useState } from "react";
import TeacherListCard from "../components/TeacherListCard";
import { mySchoolId } from "../utils/getApiUrl";
import { getAllCommittee } from './../libs/committeeAPI';

export default function CommitteePage() {
  // get school id
  const schoolId = mySchoolId();

  // fetch school info
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await getAllCommittee(schoolId);

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
        <section className="bg-white mt-2">
        <main>
          <div className="bg-lightBg px-5 py-10 text-center text-2xl font-bold">
            <h1>“ম্যানেজমেন্ট কমিটি”</h1>
          </div>
        </main>

        <main className="px-5">
          <div className="grid grid-cols-12 my-10">
            {data &&
            data.map((item, i) => (
              <div key={item._id} className="col-span-12 md:c0l-span-6 lg:col-span-3 mt-5">
                <TeacherListCard data={item} sl={i} classes="mx-5" />
            </div>
            ))}
            
          </div>
        </main>
      </section>
    </>
  )
}