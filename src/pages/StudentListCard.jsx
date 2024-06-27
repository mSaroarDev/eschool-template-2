import { ChevronRight } from "lucide-react";
import convertToBanglaNumber from "../utils/convertNumbertoBangla";
import { Link } from "react-router-dom";

export default function StudentListCard({data, sl}) {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
        >
          {convertToBanglaNumber(sl + 1)}
        </th>
        <td className="px-6 py-4">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <img
              src={data?.image}
              alt="name"
              className="w-full h-full object-cover"
            />
          </div>
        </td>
        <td className="px-6 py-4 font-bold">
          {data?.name_bn} <br />
          {data?.name_en}
        </td>
        <td className="px-6 py-4 capitalize">
        {data?.classe} <br /> {data?.section}
        </td>
        <td className="px-6 py-4">{data?.personal_information?.permanent_address?.district2}</td>
        <td className="px-6 py-4 text-right">
          {/* <Link to={`/student/profile/${data?._id}`} className="bg-brandColor text-white px-3 py-2 hover:bg-brandColor/20 hover:text-brandColor items-center gap-1 inline-flex">
            <span>প্রোফাইল</span>
            <ChevronRight className="w-4 h-4" />
          </Link> */}
        </td>
      </tr>
    </>
  );
}
