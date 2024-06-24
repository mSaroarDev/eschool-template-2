import { Link } from "react-router-dom";

export default function ScrollingNotice() {
  return (
    <>
      <main className="px-5 mt-5">
        <div className="flex items-center gap-0">
          <div className="bg-brandColor text-white px-5 py-2">নোটিশ সমুহ</div>
          <div className="flex-1 bg-lightBg px-5 py-1">
            <marquee>
                <Link className="mr-20 hover:underline">
                    »{" "}বর্তমান সময়ে বেসিক কম্পিউটার এ নিজেকে একধাপ এগিয়ে রাখতে কম্পিউটার ফান্ডামেন্ডাল বা কম্পিউটারের হাতে খড়ির কোন বিকল্প নেই।
                </Link>

                <Link className="mr-20 hover:underline">
                    »{" "}বর্তমান সময়ে বেসিক কম্পিউটার এ নিজেকে একধাপ এগিয়ে রাখতে কম্পিউটার ফান্ডামেন্ডাল বা কম্পিউটারের হাতে খড়ির কোন বিকল্প নেই।
                </Link>

                <Link className="mr-20 hover:underline">
                    »{" "}বর্তমান সময়ে বেসিক কম্পিউটার এ নিজেকে একধাপ এগিয়ে রাখতে কম্পিউটার ফান্ডামেন্ডাল বা কম্পিউটারের হাতে খড়ির কোন বিকল্প নেই।
                </Link>
            </marquee>
          </div>
        </div>
      </main>
    </>
  );
}
