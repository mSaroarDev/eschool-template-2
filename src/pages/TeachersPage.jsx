import TeacherListCard from "../components/TeacherListCard";

export default function TeachersPage() {
  return (
    <>
        <section className="bg-white mt-2">
        <main>
          <div className="bg-lightBg px-5 py-10 text-center text-2xl font-bold">
            <h1>“সম্মানীত শিক্ষকমন্ডলী”</h1>
          </div>
        </main>

        <main className="px-5">
          <div className="grid grid-cols-12 my-10">
            <div className="col-span-12 md:c0l-span-6 lg:col-span-3 mt-5">
                <TeacherListCard classes="mx-5" />
            </div>

            <div className="col-span-12 md:c0l-span-6 lg:col-span-3 mt-5">
                <TeacherListCard classes="mx-5" />
            </div>

            <div className="col-span-12 md:c0l-span-6 lg:col-span-3 mt-5">
                <TeacherListCard classes="mx-5" />
            </div>

            <div className="col-span-12 md:c0l-span-6 lg:col-span-3 mt-5">
                <TeacherListCard classes="mx-5" />
            </div>

            <div className="col-span-12 md:c0l-span-6 lg:col-span-3 mt-5">
                <TeacherListCard classes="mx-5" />
            </div>

            <div className="col-span-12 md:c0l-span-6 lg:col-span-3 mt-5">
                <TeacherListCard classes="mx-5" />
            </div>

            <div className="col-span-12 md:c0l-span-6 lg:col-span-3 mt-5">
                <TeacherListCard classes="mx-5" />
            </div>
            
          </div>
        </main>
      </section>
    </>
  )
}