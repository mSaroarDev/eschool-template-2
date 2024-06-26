import NavItem from "./NavItem";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <>
      <div className="hidden lg:block">
        <main className="px-5">
          <div className="flex items-center bg-lightBg">
            <NavItem link={"/"} text="প্রথম পাতা" />
            <NavItem link={"/about"} text="আমাদের কথা" />
            <NavItem link={"/teachers"} text="শিক্ষকমন্ডলীর তথ্য" />
            <NavItem link={"/staffs"} text="স্টাফদের তথ্য" />
            <NavItem link={"/committee"} text="কমিটির তথ্য" />
            <NavItem link={"/students/all?page=1"} text="শিক্ষার্থীর তথ্য" />
            <NavItem link={"/admission/home"} text="অনলাইন অ্যাডমিশন" />
            <NavItem link={"/result"} text="ফলাফল" />
            <NavItem link={"/contact"} text="যোগাযোগ" />
          </div>
        </main>
      </div>

      <div className="block lg:hidden">
        <main className="px-5">
          <div className="flex items-center justify-between bg-lightBg">
            <NavItem link={"/"} text="হোমপেজ" />

            <div className="flex items-center justify-end">
              <div className="drawer z-40">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer"
                    className="btn bg-brandColor text-white p-3 drawer-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                      />
                    </svg>
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li>
                    <NavLink link={"/"} text="হোমপেজ" />   
                    </li>
                    <li><NavLink link={"/about"} text="আমাদের কথা" /></li>
                    <li><NavLink link={"/teachers"} text="শিক্ষকমন্ডলীর তথ্য" /></li>
                    <li><NavLink link={"/staffs"} text="স্টাফদের তথ্য" /></li>
                    <li><NavLink link={"/committee"} text="কমিটির তথ্য" /></li>
                    <li><NavLink link={"/students?class=all"} text="শিক্ষার্থীর তথ্য" /></li>
                    <li><NavLink link={"/admission"} text="অনলাইন অ্যাডমিশন" /></li>
                    <li><NavLink link={"/result"} text="ফলাফল" /></li>
                    <li><NavLink link={"/contact"} text="যোগাযোগ" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
