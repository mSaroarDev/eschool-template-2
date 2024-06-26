import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAdmission } from "../libs/admissoinAPI";
import Spinner from "../components/spinner/Spinner";

export default function AdmissionResultViewPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  // const schoolId = mySchoolId();
  const [data, setData] = useState();
  const fetchData = async () => {
    setLoading(true);
    const res = await getAdmission(id);

    setLoading(false);
    if (res.ok) {
      const data = await res.json();
      setData(data.data);
    } else {
      console.log("Internal server error");
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  // conditions
  const currStatus = () => {
    if (data?.current_status?.status == "submitted") {
      return (
        <span className="font-bold text-purple-700 underline">
          আবেদনটি সফলভাবে জমা হয়েছে এবং যাচাই বাচাইয়ের জন্য অপেক্ষমান আছে।
        </span>
      );
    }

    if (data?.current_status?.status == "accepted") {
      return (
        <span className="font-bold text-green-500 underline">
          অভিনন্দন! আপনি উক্ত প্রতিষ্ঠানে ভর্তির জন্য নির্বাচিত হয়েছেন।
        </span>
      );
    }

    if (data?.current_status?.status == "rejected") {
      return (
        <span className="font-bold text-red-500 underline">
          দুঃখিত! উক্ত আবেদনটি গ্রহনযোগ্য হিসেবে বিবেচিত হয়নি।
        </span>
      );
    }

    if (data?.current_status?.status == "waiting") {
      return (
        <span className="font-bold text-red-500 underline">
          উক্ত আবেদনটি অপেক্ষমান (Waiting) অবস্থায় আছে।
        </span>
      );
    }
  };

  return (
    <>
      <main>
        {loading && <Spinner />}
        <div className="border border-gray-500 overflow-hidden mt-2">
          <div className="px-3 py-1 bg-brandColor text-white text-[16px] text-center">
            চুড়ান্ত ফলাফল
          </div>

          <div className="p-5 bg-custom text-[17px]">
            <p className="text-green-600 font-bold text-center drop-shadow-sm	">
              {currStatus()}
            </p>
            <br />

            <div className="flex items-start justify-center gap-3 mt-5">
              <div className="h-[90px] w-[90px] overflow-hidden border border-black">
                <img
                  src={data && data?.student_image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="font-bold text-[18px] capitalize">
                  আবেদনকারীর নামঃ {data && data?.name_bn} (
                  {data && data?.name_en})
                </h1>
                <p>ট্র্যাকিং নং- {data && data?.admission_tracking_no}</p>
                <p>প্রতিষ্ঠানের নামঃ {data && data?.institute?.name_bn}</p>
                <p>শ্রেনীঃ {data && data?.admission_info?.classe}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
