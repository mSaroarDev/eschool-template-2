export default function Statistics() {
  return (
    <>
        <section className="py-20">
            <main className="px-5">
                <div className="grid grid-cols-12 gap-5">
                    <div className="h-fit col-span-6 md:col-span-4 lg:col-span-3 p-5 bg-white border border-borderColor flex flex-col items-center justify-center gap-2 shadow-md hover:border-t-[4px] hover:border-t-brandColor transition-all duration-300">
                        <h2 className="font-bold text-[45px] text-brandColor">৫০</h2>
                        <p className="font-bold text-[18px]">মোট শিক্ষার্থী</p>
                    </div>

                    <div className="h-fit col-span-6 md:col-span-4 lg:col-span-3 p-5 bg-white border border-borderColor flex flex-col items-center justify-center gap-2 shadow-md hover:border-t-[4px] hover:border-t-brandColor transition-all duration-300">
                        <h2 className="font-bold text-[45px] text-brandColor">২৫</h2>
                        <p className="font-bold text-[18px]">মোট শিক্ষকমন্ডলী</p>
                    </div>

                    <div className="h-fit col-span-6 md:col-span-4 lg:col-span-3 p-5 bg-white border border-borderColor flex flex-col items-center justify-center gap-2 shadow-md hover:border-t-[4px] hover:border-t-brandColor transition-all duration-300">
                        <h2 className="font-bold text-[45px] text-brandColor">২৫</h2>
                        <p className="font-bold text-[18px]">মোট শ্রেনী</p>
                    </div>

                    <div className="h-fit col-span-6 md:col-span-4 lg:col-span-3 p-5 bg-white border border-borderColor flex flex-col items-center justify-center gap-2 shadow-md hover:border-t-[4px] hover:border-t-brandColor transition-all duration-300">
                        <h2 className="font-bold text-[45px] text-brandColor">২৫</h2>
                        <p className="font-bold text-[18px]">মোট স্টাফ</p>
                    </div>
                </div>
            </main>
        </section>
    </>
  )
}