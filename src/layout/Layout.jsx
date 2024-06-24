import AdmissionNavbar from "../components/AdmissionNavbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "./../components/Navbar";
import { useLocation } from "react-router-dom";

export default function MasterLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <>
      {pathname.startsWith("/admission") ? (
        <>
          <Header />
          <AdmissionNavbar />
          {children}
        </>
      ) : (
        <>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
