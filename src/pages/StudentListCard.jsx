import { ChevronRight } from "lucide-react";

export default function StudentListCard() {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
        >
          ০১
        </th>
        <td className="px-6 py-4">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <img
              src="/avatar.jpg"
              alt="name"
              className="w-full h-full object-cover"
            />
          </div>
        </td>
        <td className="px-6 py-4">
          সারোয়ার জাহান <br />
          Saroar Jahan
        </td>
        <td className="px-6 py-4">
          ৬ষ্ঠ শ্রেণী <br />ক
        </td>
        <td className="px-6 py-4">রাজশাহী।</td>
        <td className="px-6 py-4 text-right">
          <button className="bg-brandColor text-white px-3 py-2 hover:bg-brandColor/20 hover:text-brandColor items-center gap-1 inline-flex">
            <span>প্রোফাইল</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </td>
      </tr>
    </>
  );
}
