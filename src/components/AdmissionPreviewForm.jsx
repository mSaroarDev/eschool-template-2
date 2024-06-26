import { useState } from "react";
import { useEffect } from "react";
import { useFormik } from "formik";
import { showError, showSuccess } from "../utils/toastMessage";
import { createAdmission, getAdmission, submitAdmission } from "../libs/admissoinAPI";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Spinner from "./spinner/Spinner";

export default function AdmissionPreviewForm() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // query
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab")

  // fetch photos
  const [studentPhoto, setStudentPhoto] = useState();
  const [studentSign, setStudentSign] = useState();

  // const schoolId = mySchoolId();
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await getAdmission(id);

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

  // handle submit
  const handleSubmit = async () => {
    const res = await submitAdmission(id);

    if(res.ok){
      showSuccess("আবেদন সফলভাবে জমা হয়েছে!")
      navigate(`/admission/application/print/${id}`)
    } else {
      showError("There was an problem to submit")
    }
  }

  // formik
  const formik = useFormik({
    initialValues: {
      name_en: "",
      name_bn: "",
      father_name: "",
      mother_name: "",
      dob: "",
      gender: "",
      present_address: "",
      permanent_address: "",
      religion: "",
      nationality: "",
      mobile_no: "",
      blood_group: "",
      birth_reg_no: "",
      father_nid: "",
      classe: "",
      department: "",
      previous_classe: "",
      previous_roll_no: "",
      previous_institute: "",
      student_image: "",
      student_sign: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      const res = await createAdmission(values);

      setLoading(false);
      if (res.ok) {
        showSuccess("Form Filled");
        const data = await res.json();
        window.open(`/admission/application/print/${data?.data?.id}`, '_blank');
      } else {
        showError("There was an error");
      }
    },
  });

  // set field value
  useEffect(() => {
    formik.setValues({
      name_en: data && data?.name_en,
      name_bn: data && data?.name_bn,
      father_name: data && data?.father_name,
      mother_name: data && data?.mother_name,
      dob: data && data?.dob,
      gender: data && data?.gender,
      present_address: data && data?.present_address,
      permanent_address: data && data?.permanent_address,
      religion: data && data?.religion,
      nationality: data && data?.nationality,
      mobile_no: data && data?.mobile_no,
      blood_group: data && data?.blood_group,
      birth_reg_no: data && data?.birth_reg_no,
      father_nid: data && data?.father_nid,
      classe: data && data?.admission_info?.classe,
      department: data && data?.admission_info?.department,
      previous_classe: data && data?.admission_info?.previous_classe,
      previous_roll_no: data && data?.admission_info?.previous_roll_no,
      previous_institute: data && data?.admission_info?.previous_institute,
      student_image: data && data?.student_image,
      student_sign: data && data?.student_sign,
    });
    setStudentPhoto(data && data?.student_image);
    setStudentSign(data && data?.student_sign);
  }, [id, data]);

  return (
    <>
      {loading && <Spinner />}
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-2 grid grid-cols-12 gap-2">
          <div className="col-span-12 my-5 font-bold underline text-center">
            ব্যাক্তিগত তথ্যঃ-
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3">
              শিক্ষার্থীর নাম (in English){" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full uppercase border-none pointer-events-none"
                type="text"
                name="name_en"
                id="name_en"
                onChange={formik.handleChange}
                value={formik.values.name_en}
              />
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3">
              শিক্ষার্থীর নাম (বাংলায়) <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full border-none pointer-events-none"
                type="text"
                name="name_bn"
                id="name_bn"
                onChange={formik.handleChange}
                value={formik.values.name_bn}
              />
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3">
              পিতার নাম (বাংলায়) <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full border-none pointer-events-none"
                type="text"
                name="father_name"
                id="father_name"
                onChange={formik.handleChange}
                value={formik.values.father_name}
              />
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3">
              মাতার নাম (বাংলায়) <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full border-none pointer-events-none"
                type="text"
                name="mother_name"
                id="mother_name"
                onChange={formik.handleChange}
                value={formik.values.mother_name}
              />
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-6">
              জন্ম তারিখ <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-6 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full border-none pointer-events-none"
                type="text"
                name="dob"
                id="dob"
                onChange={formik.handleChange}
                value={formik.values.dob}
              />
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3 flex items-center justify-end">
              লিঙ্গ <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                type="text"
                className="w-full border-none pointer-events-none"
                name="gender"
                id="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
              ></input>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3">
              স্থায়ী ঠিকানা (বাংলায়) <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full border-none pointer-events-none"
                type="text"
                name="permanent_address"
                id="permanent_address"
                onChange={formik.handleChange}
                value={formik.values.permanent_address}
              />
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3">
              বর্তমান ঠিকানা (বাংলায়) <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full border-none pointer-events-none"
                type="text"
                name="present_address"
                id="present_address"
                onChange={formik.handleChange}
                value={formik.values.present_address}
              />
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-6">
              ধর্ম <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-6 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                type="text"
                className="w-full border-none pointer-events-none"
                name="religion"
                id="religion"
                onChange={formik.handleChange}
                value={formik.values.religion}
              ></input>
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3 flex items-center justify-end">
              জাতীয়তা <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                type="text"
                className="w-full border-none pointer-events-none"
                name="nationality"
                id="nationality"
                onChange={formik.handleChange}
                value={formik.values.nationality}
              ></input>
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-6">
              মোবাইল নম্বর <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-6 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full border-none pointer-events-none"
                type="text"
                name="mobile_no"
                id="mobile_no"
                onChange={formik.handleChange}
                value={formik.values.mobile_no}
              />
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3 flex items-center justify-end">
              রক্তের গ্রুপ
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                type="text"
                className="w-full border-none pointer-events-none"
                name="blood_group"
                id="blood_group"
                onChange={formik.handleChange}
                value={formik.values.blood_group}
              />
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-6">
              শিক্ষার্থীর জন্ম নিবন্ধন নং{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-6 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full border-none pointer-events-none"
                type="text"
                name="birth_reg_no"
                id="birth_reg_no"
                onChange={formik.handleChange}
                value={formik.values.birth_reg_no}
              />
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3 flex items-center justify-end">
              পিতার আইডি<span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full border-none pointer-events-none"
                type="text"
                name="father_nid"
                id="father_nid"
                onChange={formik.handleChange}
                value={formik.values.father_nid}
              />
            </div>
          </div>

          <div className="col-span-12 my-5 font-bold underline text-center">
            ভর্তি সংক্রান্ত তথ্যঃ-
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-6">
              শ্রেনী <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-6 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                type="text"
                className="w-full border-none pointer-events-none capitalize"
                name="classe"
                id="classe"
                onChange={formik.handleChange}
                value={formik.values.classe}
              />
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3 flex items-center justify-end">
              বিভাগ
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                type="text"
                className="w-full border-none pointer-events-none"
                name="department"
                id="department"
                onChange={formik.handleChange}
                value={formik.values.department}
              />
            </div>
          </div>

          <div className="col-span-12 mt-5 font-bold underline text-center">
            পূর্ববর্তী পড়াশোনার তথ্য (প্রযোজ্য ক্ষেত্রে)
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-1 md:gap-3 mt-2">
            <label className="col-span-12 md:col-span-3">
              পূর্ববর্তী প্রতিষ্ঠানের নাম (বাংলায়){" "}
          
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full border-none pointer-events-none"
                type="text"
                name="previous_institute"
                id="previous_institute"
                onChange={formik.handleChange}
                value={formik.values.previous_institute}
              />
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-6">
              পূর্ববর্তী শ্রেণী
            </label>
            <div className="col-span-12 md:col-span-6 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full border-none pointer-events-none"
                type="text"
                name="previous_classe"
                id="previous_classe"
                onChange={formik.handleChange}
                value={formik.values.previous_classe}
                placeholder="যেমনঃ ৫ম শ্রেনী"
              />
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3 flex items-center justify-end">
              রোল নং
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full border-none pointer-events-none"
                type="text"
                name="previous_roll_no"
                id="previous_roll_no"
                onChange={formik.handleChange}
                value={formik.values.previous_roll_no}
              />
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3 mt-5">
            <label className="col-span-12 md:col-span-6">
              শিক্ষার্থীর ছবি <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-6 flex items-start gap-3">
              <span className="hidden md:block">:</span>

              {studentPhoto && (
                <img src={studentPhoto} className="w-[120px] h-[120px]" />
              )}
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3 mt-5">
            <label className="col-span-12 md:col-span-3 flex items-start justify-end">
              স্বাক্ষর <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-start gap-3">
              <span className="hidden md:block">:</span>
              {studentSign && (
                <img src={studentSign} className="w-[150px] h-[80px]" />
              )}
            </div>
          </div>

          <div className="col-span-12 mt-5">
            <span className="text-red-500">*</span> আমি সমস্ত শর্তাবলী মেনে উক্ত
            ফরমটি পুরন করছি, এবং ভবিষ্যতে উক্ত প্রতিষ্ঠানের সকল নিয়ম কানুন মেনে
            চলবো। প্রতিষ্ঠানের কোন নিয়ম কানুন ভঙ্গ করবো না। এবং সকল
            শিক্ষক-শিক্ষিকাদের অনুগত থাকবো।
          </div>

          <div className="col-span-12 flex items-center justify-center">
            {tab !== "view" ? <button type="button" onClick={handleSubmit} className="btn-brand rounded-full">
              জমা দিন
            </button> : <button type="button" onClick={()=> navigate(`/application-form/print/${id}`)} className="btn-brand rounded-full">
              প্রিন্ট করুন
            </button>}
          </div>
        </div>
      </form>
    </>
  );
}
