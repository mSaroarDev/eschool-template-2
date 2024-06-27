import { ArrowDown } from "lucide-react";
import extractDateFromTimestamp, {
  getBanglaMonthNameFromTimestamp,
} from "../utils/extractDateFromTimeStamp";
import { Link } from "react-router-dom";

export default function NoticeCard({ data }) {
  return (
    <>
      <div className="bg-white border-b border-borderColor px-4 py-2 flex items-start gap-5">
        <div className="min-w-[50px] min-h-[50px] border border-brandColor">
          <div className="bg-brandColor w-full h-fit text-center text-white font-semibold italic">
            {getBanglaMonthNameFromTimestamp(data.created_at)}
          </div>
          <div className="text-center text-brandColor text-[19px] font-bold flex items-center justify-center">
            {extractDateFromTimestamp(data.created_at)}
          </div>
        </div>

        <div>
          <p className="font-bold">{data.title}</p>
          <Link
            to={`/notice/${data?._id}`}
            className="w-fit bg-white border border-brandColor rounded-full px-4 py-1 mt-2 font-sm flex items-center gap-2 hover:bg-brandColor hover:text-white transition-all duration-300"
          >
            <ArrowDown className="w-4 h-4" />
            <span>দেখুন</span>
          </Link>
        </div>
      </div>
    </>
  );
}
