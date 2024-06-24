import { Link } from "react-router-dom";
import StudentListCard from "./StudentListCard";
import Paggination from "../components/Paggination";

export default function StudentsPage() {
  return (
    <>
        <section className="bg-white mt-2">
        <main>
          <div className="bg-lightBg px-5 py-5 text-center text-2xl font-bold">
            <h1>“সকল শিক্ষার্থী”</h1>
          </div>
        </main>

        <main className="px-5 my-2">
          <div className="flex items-center gap-1">
            <p className="font-bold">শ্রেনী অনুযায়ী দেখুনঃ</p>
            <Link to="/students?class=class-6" className="bg-lightBg px-4 py-2 border border-brandColor">৬ষ্ঠ শ্রেনী</Link>
            <Link to="/students?class=class-6" className="bg-lightBg px-4 py-2 border border-brandColor">৬ষ্ঠ শ্রেনী</Link>
            <Link to="/students?class=class-6" className="bg-lightBg px-4 py-2 border border-brandColor">৬ষ্ঠ শ্রেনী</Link>
            <Link to="/students?class=class-6" className="bg-lightBg px-4 py-2 border border-brandColor">৬ষ্ঠ শ্রেনী</Link>
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
                      <StudentListCard />
                      <StudentListCard />
                      <StudentListCard />
                      <StudentListCard />
                      <StudentListCard />
                      <StudentListCard />
                      <StudentListCard />
                      <StudentListCard />
                      <StudentListCard />
                      <StudentListCard />
                  </tbody>
              </table>
          </div>

          <div className="flex items-center justify-end">
            <Paggination count={65} nextLink={"/"} />
          </div>
        </main>
      </section>
    </>
  )
}