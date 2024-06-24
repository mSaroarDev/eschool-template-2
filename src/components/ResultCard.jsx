import { ArrowDown } from "lucide-react";

export default function ResultCard() {
  return (
    <>
      <div className="bg-white border-b border-borderColor px-4 py-2 flex items-start gap-5">
        <div className="min-w-[50px] min-h-[50px]">
          <img src="/checklist.png" alt="Result" className="w-[50px] h-auto" />
        </div>

        <div>
          <p className="font-bold">
            অর্ধবার্ষিক ২০২৪ এর ফলাফল{" "}
          </p>
          <button className="bg-white border border-brandColor rounded-full px-4 py-1 mt-2 font-sm flex items-center gap-2 hover:bg-brandColor hover:text-white transition-all duration-300">
            <ArrowDown className="w-4 h-4" />
            <span>ডাউনলোড</span>
          </button>
        </div>
      </div>
    </>
  );
}
