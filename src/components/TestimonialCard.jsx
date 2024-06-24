export default function TestimonialCard() {
  return (
    <>
        <div className="py-10 px-5">
            <div className="flex flex-col items-center gap-1">
                <div className="w-[50px] h-[50px] rounded-full ring-2 ring-brandColor/50 overflow-hidden">
                    <img src="/avatar.jpg" alt="Avatar" className="w-full h-full object-cover" />
                </div>

                <div className="mt-5 text-center italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui aperiam voluptate laborum aliquid vel autem, numquam fugiat ad dignissimos quam provident error alias, libero doloribus, omnis repudiandae eum deleniti.
                </div>

                <div className="mt-5 text-center">
                    <h3 className="font-bold text-[16px]">John Doe</h3>
                    <p className="text-center">Upazilla President</p>
                </div>
            </div>
        </div>
    </>
  )
}