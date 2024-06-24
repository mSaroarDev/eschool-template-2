

export default function ResultListCard({data}) {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-2 p-2 border-r border-b border-gray-300">
          {/* {convertDateFormat(data?.created_at)} */}
        </div>
        <div className="col-span-8 p-2 border-r border-b border-gray-300">
          {data?.title}
        </div>
        <div className="col-span-2 p-2 border-r border-b border-gray-300">
          <a href={data?.pdf_link} target="_blank" className="flex items-center gap-1">
            <img src="/pdf.png" alt="" className="w-[25px]" /> <span>ডাউনলোড</span>
          </a>
        </div>
      </div>
    </>
  );
}
