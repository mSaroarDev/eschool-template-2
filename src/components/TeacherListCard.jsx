export default function TeacherListCard({classes}) {
  return (
    <>
        <div className={`bg-white border border-borderColor border-b-[3px] border-b-brandColor ${classes}`}>
            <div className="bg-brandColor h-[160px] flex items-center justify-center">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                    <img src="/avatar.jpg" alt="Saroar" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="p-5">
                <h2 className="font-bold text-[16px]">সারোয়ার জাহান</h2>
                <p>পদবীঃ প্রধান শিক্ষক</p>
                <p>নিজ জেলাঃ প্রধান শিক্ষক</p>
                <p>মোবাইলঃ ০১৭৯৯৮৪৫৬৪</p>
            </div>
        </div>
    </>
  )
}