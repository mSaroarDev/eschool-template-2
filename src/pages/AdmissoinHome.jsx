export default function AdmissoinHome() {
  const data = {};
  return (
    <>
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
