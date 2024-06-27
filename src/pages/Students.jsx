import { Link, useParams, useSearchParams } from "react-router-dom";
import StudentListCard from "./StudentListCard";
import Paggination from "../components/Paggination";
import { mySchoolId } from "../utils/getApiUrl";
import { useEffect, useState } from "react";
import { getAllClasses } from './../libs/classes';
import { getAllClassStudents, getAllStudents } from "../libs/students";
import { useSEOInfo } from "../seo/useSeoInfo";
import SEOPage from "../components/SEOPage";

export default function StudentsPage() {
  // get school id
  const schoolId = mySchoolId();
  const {id} = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  // fetch school info
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await getAllClasses(schoolId);

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

  // fetch school info
  const [students, setStudents] = useState(null);
  const fetchStudents = async () => {
    let res;
    if (id == "all") {
      res = await getAllClassStudents(schoolId, 1, 10);
    } else {
      res = await getAllStudents(schoolId, page, 10, id);
    }

    if (res.ok) {
      const data = await res.json();
      setStudents(data.data);
    } else {
      console.log("Internal server error");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [id, page]);

  // fetch all students
  // fetch school info
  const [allStudents, setAllStudents] = useState(null);
  const fetchAllStudents = async () => {
    let res;
    if (id == "all") {
      res = await getAllClassStudents(schoolId, 1, 0);
    } else {
      res = await getAllStudents(schoolId, 1, 0, id);
    }

    if (res.ok) {
      const data = await res.json();
      setAllStudents(data.data);
    } else {
      console.log("Internal server error");
    }
  };

  useEffect(() => {
    fetchAllStudents();
  }, [id]);

  // seo
  const getSeoInfo = useSEOInfo();

  return (
    <>
      {/* seo start */}
      <SEOPage title={`Students - ${getSeoInfo && getSeoInfo?.schoolInfo?.name_en}`} />
      {/* seo end */}


        <section className="bg-white mt-2">
        <main>
          <div className="bg-lightBg px-5 py-5 text-center text-2xl font-bold">
            <h1>“সকল শিক্ষার্থী”</h1>
          </div>
        </main>

        <main className="px-5 my-5">
          <div className="flex items-center gap-1">
            <p className="font-bold">শ্রেনী অনুযায়ী দেখুনঃ</p>
            <Link to={`/students/all?page=1`} className="bg-brandColor text-white px-3 py-1 rounded-full">সকল</Link>
            {data &&
              data.map((item, i) => (
                <Link key={i} to={`/students/${item?.name_en}?page=1`} className="bg-brandColor text-white px-3 py-1 rounded-full">{item?.name_bn}</Link>
              ))}
    
          </div>
        </main>

        <main className="px-5 mb-5">
          

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-left rtl:text-right dark:text-gray-400 text-black">
                  <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              রোল নং
                          </th>
                          <th scope="col" className="px-6 py-3">
                              ছবি
                          </th>
                          <th scope="col" className="px-6 py-3">
                              নাম
                          </th>
                          <th scope="col" className="px-6 py-3">
                          শ্রেণী ও শাখা
                          </th>
                          <th scope="col" className="px-6 py-3">
                              নিজ জেলা
                          </th>
                          <th scope="col" className="px-6 py-3 text-right">
                              বিস্তারিত
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                  {students &&
                    students.map((student, i) => (
                      <StudentListCard key={student._id} data={student} sl={i} />
                    ))}
                  </tbody>
              </table>
          </div>

          <div className="flex items-center justify-end">
            <Paggination count={parseInt(allStudents?.length)} nextLink={`/students/${id}`} />
          </div>
        </main>
      </section>
    </>
  )
}