import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MasterLayout from "./layout/Layout";
import AboutPage from "./pages/AboutPage";
import Toploader from "./components/Toploader";
import TeachersPage from "./pages/TeachersPage";
import StaffsPage from "./pages/StaffsPage";
import CommitteePage from "./pages/CommitteePage";
import ResultPage from "./pages/ResultPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Toploader />
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/staffs" element={<StaffsPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/students" element={<AboutPage />} />
          <Route path="/admission" element={<AboutPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MasterLayout>
    </>
  );
}

export default App;
