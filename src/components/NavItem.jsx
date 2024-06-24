import { Link, useLocation } from "react-router-dom";

export default function NavItem({link, text}) {
    const {pathname} = useLocation();

  return (
    <>
      <Link to={link} className={`px-4 py-2 hover:bg-brandColor hover:text-white text-[15px] font-semibold ${pathname === link && "bg-brandColor text-white"} transition-all duration-200 ${pathname.startsWith("/students") && text === "শিক্ষার্থীর তথ্য" && "bg-brandColor text-white"}`}>
        <span>{text}</span>
      </Link>
    </>
  );
}
