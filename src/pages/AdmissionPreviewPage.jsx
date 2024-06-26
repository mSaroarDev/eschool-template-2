import AdmissionPreviewForm from "../components/AdmissionPreviewForm";

export default function AdmissionPreviewPage() {
  return (
    <>
      <main>
        <div className="border border-dotted border-gray-500 overflow-hidden mt-2">
          <div className="px-3 py-1 bg-gray-100 font-bold text-[15px] text-center">
            অ্যাডমিশন ফরম
          </div>

          <div className="p-5 bg-custom text-[17px] text-justify">
            <p className="text-center">
              ( <span className="text-red-500">*</span> ) চিহ্নিত ঘরগুলো অবশ্য
              পুরনীয়
            </p>

            <AdmissionPreviewForm />
          </div>
        </div>
      </main>
    </>
  );
}
