import { useState } from "react";
import { useFormik } from "formik";
// import { showError, showSuccess } from "../utils/toastMessage";
import { useNavigate } from "react-router-dom";
import Spinner from "./spinner/Spinner";
import { ArrowRight } from 'lucide-react';

export default function AdmissionForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // // fetch CLASSES info
  // const schoolId = mySchoolId();
  // const [data, setData] = useState();
  // const fetchData = async () => {
  //   const res = await getAllClasses(schoolId);

  //   if (res.ok) {
  //     const data = await res.json();
  //     setData(data.data);
  //   } else {
  //     console.log("Internal server error");
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // // upload image
  // // authorize sign image upload
  // const [studentPicture, setStudentPicture] = useState();
  // const [studentSign, setStudentSign] = useState();

  // const handleStudentPictureChange = async (e) => {
  //   await handleImageUpload(e, setStudentPicture, "student_image");
  // };

  // const handleStudentSignChange = async (e) => {
  //   await handleImageUpload(e, setStudentSign, "student_sign");
  // };

  // const handleImageUpload = async (e, setImageUrl, formikFieldName) => {
  //   try {
  //     const image = e.target.files[0];
  //     const fileSizeInKb = image.size / 1024;
  //     if (fileSizeInKb > 1024) {
  //       return showError("File size must be less than 1 MB");
  //     }
  //     const allowedTypes = ["image/jpeg", "image/png"];
  //     if (!allowedTypes.includes(image.type)) {
  //       return showError("Please select jpg or png image only");
  //     }

  //     const res = await fileUpload(image);
  //     const file = await res.json();
  //     if (res.ok) {
  //       setImageUrl(file.url);
  //       formik.setFieldValue(formikFieldName, file.url);
  //     }
  //   } catch (error) {
  //     showError("Image Upload Failed");
  //   }
  // };

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
      // institute: schoolId,
    },
    onSubmit: async (values) => {
      const {
        name_en,
        name_bn,
        father_name,
        mother_name,
        dob,
        gender,
        present_address,
        permanent_address,
        religion,
        nationality,
        mobile_no,
        blood_group,
        birth_reg_no,
        father_nid,
        classe,
        previous_classe,
        previous_institute,
        student_image,
        student_sign,
      } = values;

      if (
        !name_en ||
        !name_bn ||
        !father_name ||
        !mother_name ||
        !dob ||
        !gender ||
        !present_address ||
        !permanent_address ||
        !religion ||
        !nationality ||
        !mobile_no ||
        !blood_group ||
        !birth_reg_no ||
        !father_nid ||
        !classe ||
        !student_image ||
        !student_sign
      ) {
        return showError("* চিহ্নিত ঘর অবশ্য পূরনীয়");
      }

      // setLoading(true);
      // const res = await createAdmission(values);

      // setLoading(false);
      // if (res.ok) {
      //   showSuccess("Form Submitted");
      //   const data = await res.json();
      //   console.log(data);
      //   navigate(`/admission/apply/${data?.data?.id}`);
      // } else {
      //   showError("There was an error");
      // }
    },
  });

  const data = []

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
                className="w-full uppercase"
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
                className="w-full"
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
                className="w-full"
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
                className="w-full"
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
                className="w-full"
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
              <select
                className="w-full"
                name="gender"
                id="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
              >
                <option value="">সিলেক্ট করুন</option>
                <option value="পুরুষ">পুরুষ</option>
                <option value="নারী">নারী</option>
              </select>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3">
              স্থায়ী ঠিকানা (বাংলায়) <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full"
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
                className="w-full"
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
              <select
                className="w-full"
                name="religion"
                id="religion"
                onChange={formik.handleChange}
                value={formik.values.religion}
              >
                <option value="">সিলেক্ট করুন</option>
                <option value="ইসলাম">ইসলাম</option>
                <option value="হিন্দু">হিন্দু</option>
                <option value="বৌদ্ধ">বৌদ্ধ</option>
                <option value="খ্রীষ্টান">খ্রীষ্টান</option>
                <option value="অন্যান্য">অন্যান্য</option>
              </select>
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3 flex items-center justify-end">
              জাতীয়তা <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <select
                className="w-full"
                name="nationality"
                id="nationality"
                onChange={formik.handleChange}
                value={formik.values.nationality}
              >
                <option value="">সিলেক্ট করুন</option>
                <option value="বাংলাদেশী">বাংলাদেশী</option>
                <option value="অন্যান্য">অন্যান্য</option>
              </select>
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-6">
              মোবাইল নম্বর <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-6 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full"
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
              <select
                className="w-full"
                name="blood_group"
                id="blood_group"
                onChange={formik.handleChange}
                value={formik.values.blood_group}
              >
                <option value="">সিলেক্ট করুন</option>
                <option value="A (+ve)">A (+ve)</option>
                <option value="A (-ve)">A (-ve)</option>
                <option value="B (+ve)">B (+ve)</option>
                <option value="B (-ve)">B (-ve)</option>
                <option value="AB (+ve)">AB (+ve)</option>
                <option value="AB (-ve)">AB (-ve)</option>
                <option value="O (+ve)">O (+ve)</option>
                <option value="O (-ve)">O (-ve)</option>
              </select>
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
                className="w-full"
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
                className="w-full"
                type="text"
                name="father_nid"
                id="father_nid"
                onChange={formik.handleChange}
                value={formik.values.father_nid}
              />
            </div>
          </div>

          <div className="col-span-12 mt-5 font-bold underline text-center">
            ভর্তি সংক্রান্ত তথ্যঃ-
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-6">
             ভর্তিচ্ছু শ্রেনী <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-6 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <select
                className="w-full"
                name="classe"
                id="classe"
                onChange={formik.handleChange}
                value={formik.values.classe}
              >
                <option value="">সিলেক্ট করুন</option>
                {data &&
                  data?.map((item, i) => (
                    <option key={i} value={item?.name_bn}>
                      {item?.name_bn}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3">
            <label className="col-span-12 md:col-span-3 flex items-center justify-end">
              বিভাগ
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <select
                className="w-full"
                name="department"
                id="department"
                onChange={formik.handleChange}
                value={formik.values.department}
              >
                <option value="">সিলেক্ট করুন</option>
                <option value="বিজ্ঞান">বিজ্ঞান</option>
                <option value="মানবিক">মানবিক</option>
                <option value="বানিজ্য">বানিজ্য</option>
              </select>
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
                className="w-full"
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
                className="w-full"
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
                className="w-full"
                type="text"
                name="previous_roll_no"
                id="previous_roll_no"
                onChange={formik.handleChange}
                value={formik.values.previous_roll_no}
              />
            </div>
          </div>

          {/* <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3 mt-7">
            <label className="col-span-12 md:col-span-6">
              শিক্ষার্থীর ছবি <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-6 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full"
                type="file"
                onChange={handleStudentPictureChange}
              />
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-12 gap-1 md:gap-3 mt-7">
            <label className="col-span-12 md:col-span-3 flex items-center justify-end">
              স্বাক্ষর <span className="text-red-500">*</span>
            </label>
            <div className="col-span-12 md:col-span-9 flex items-center gap-3">
              <span className="hidden md:block">:</span>
              <input
                className="w-full"
                type="file"
                onChange={handleStudentSignChange}
              />
            </div>
          </div> */}

          <div className="col-span-12 mt-5">
            <span className="text-red-500">*</span> আমি সমস্ত শর্তাবলী মেনে উক্ত
            ফরমটি পুরন করছি, এবং ভবিষ্যতে উক্ত প্রতিষ্ঠানের সকল নিয়ম কানুন মেনে
            চলবো। প্রতিষ্ঠানের কোন নিয়ম কানুন ভঙ্গ করবো না। এবং সকল
            শিক্ষক-শিক্ষিকাদের অনুগত থাকবো।
          </div>

          <div className="col-span-12 flex items-center justify-center">
            <button type="submit" className="btn-brand flex items-center gap-2">
                <span>পরবর্তী ধাপ</span>
                <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
