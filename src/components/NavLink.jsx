import { useLocation } from "react-router-dom";

export default function NavLink({link, text}) {
    const {pathname} = useLocation();

  return (
    <>
      <a href={link} className={`px-4 py-2 hover:bg-brandColor hover:text-white text-[15px] font-semibold ${pathname === link && "bg-brandColor text-white"} transition-all duration-200`}>
        <span>{text}</span>
      </a>
    </>
  );
}