export default function TeacherListCard({classes, data}) {
    console.log(data);
  return (
    <>
        <div className={`bg-white border border-borderColor border-b-[3px] border-b-brandColor ${classes}`}>
            <div className="bg-brandColor h-[160px] flex items-center justify-center">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                    <img src={data?.image || "/placeholder.jpg"} alt="Saroar" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="p-5">
                <h2 className="font-bold text-[16px]">{data?.name_bn}</h2>
                <p>পদবীঃ {data?.designation}</p>
                <p>নিজ জেলাঃ {data?.address}</p>
                <p>মোবাইলঃ {data?.mobile_no}</p>
            </div>
        </div>
    </>
  )
}