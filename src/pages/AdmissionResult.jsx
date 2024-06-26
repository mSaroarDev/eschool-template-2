import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdmissionByTracking } from "../libs/admissoinAPI";
import { showError } from "../utils/toastMessage";
import Spinner from "../components/spinner/Spinner";
import { mySchoolId } from "../utils/getApiUrl";
import { getSchoolInfo } from "./../libs/schoolAPI";
import { useEffect } from "react";

export default function AdmissionResultPage() {
  // get school id
  const schoolId = mySchoolId();

  // fetch school info
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await getSchoolInfo(schoolId);

    if (res.ok) {
      const data = await res.json();
      setData(data.data);
    } else {
      console.log("Internal server error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [tracking, setTracking] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await getAdmissionByTracking(tracking);
    const data = await res.json();

    setLoading(false);
    if (!data?.data?.admission_tracking_no) {
      showError("Tracking is not valid");
    } else {
      navigate(`/admission/result/${data?.data?._id}`);
    }
  };

  return (
    <>
      <main>
        {loading && <Spinner />}

        {data && data?.admission_corner?.isOpen == "false" ? (
          <div className="my-24">
            <div className="flex flex-col items-center justify-center bg-red-500 text-white py-2">
              অ্যাডমিশন সিস্টেম বন্ধ আছে।
            </div>
          </div>
        ) : (
          <>
            <div className="border border-dotted border-gray-500 overflow-hidden mt-2">
              <div className="px-3 py-2 bg-brandColor text-white font-bold text-center">
                অ্যাডমিশন রেজাল্ট
              </div>

              <div className="p-5 bg-custom text-[17px] text-justify">
                <div className="flex items-center gap-1 justify-center">
                  <label>আবেদন ট্র্যাকিং নং- </label>
                  <input
                    type="text"
                    onChange={(e) => setTracking(e.target.value)}
                    value={tracking}
                    className="rounded-full"
                  />
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn-brand rounded-full"
                  >
                    ফলাফল দেখুন
                  </button>
                </div>
              </div>
            </div>{" "}
          </>
        )}
      </main>
    </>
  );
}
