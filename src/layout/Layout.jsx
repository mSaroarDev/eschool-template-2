import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from './../components/Navbar';

export default function MasterLayout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
