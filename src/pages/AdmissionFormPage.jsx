import AdmissionForm from "../components/AdmissionForm";

export default function AdmissionFormPage() {
    const data = {};

  return (
    <>
        <main>
        {data && data?.admission_corner?.isOpen == "false" ? (
        <div className="my-24">
          <div className="flex flex-col items-center justify-center bg-red-500 text-white py-2">
            অ্যাডমিশন সিস্টেম বন্ধ আছে।
          </div>
        </div>
      ) : (
        <>
          <div className="border border-gray-500 overflow-hidden mt-2">
            <div className="px-3 py-2 bg-brandColor text-white text-[16px] text-center">
              অ্যাডমিশন ফরম
            </div>

            <div className="p-5 bg-custom text-[17px] text-justify">
              <p className="text-center">
                ( <span className="text-red-500">*</span> ) চিহ্নিত ঘরগুলো অবশ্য
                পুরনীয়। <br /> শিক্ষার্থীর ছবির ক্ষেত্রে ৩০০x৩০০ পিক্সেল এবং
                ছবির সর্বোচ্চ সাইজ ১০০ কিলোবাইট এর মধ্যে হতে হবে। <br /> এবং
                স্বাক্ষর এর ক্ষেত্রে ৩০০x৮০ পিক্সেল এবং ছবির সর্বোচ্চ সাইজ ৬০
                কিলোবাইট এর মধ্যে হতে হবে।
              </p>

              <AdmissionForm />
            </div>
          </div>{" "}
        </>
      )}
        </main>
    </>
  )
}