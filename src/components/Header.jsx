export default function Header() {
  return (
    <>
      <div className="bg-gray-100 py-1">
        <main>
          <div className="flex items-center justify-end">
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <span>example@gmail.com</span>
            </p>
          </div>
        </main>
      </div>

      <div className="bg-white py-2">
        <main className="px-5 flex items-center justify-between">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-5 lg:mb-0">
            <div className="w-[120px] h-[120px]">
              <img src="/school-logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="font-bold text-[28px]">ইসলামিক স্কুল অব বাংলাদেশ</h1>
              <h1 className="text-[18px]">পবা, রাজশাহী।</h1>
            </div>
          </div>

          <div className="hidden lg:block w-[130px] h-[130px]">
            <img src="/mujib100.svg" alt="মুজিব শতবর্ষ" />
          </div>
        </main>
      </div>
    </>
  );
}
