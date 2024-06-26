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
import StudentsPage from "./pages/Students";
import AdmissoinHome from "./pages/AdmissoinHome";
import AdmissionFormPage from "./pages/AdmissionFormPage";
import AdmissionPreviewPage from "./pages/AdmissionPreviewPage";
import TestPDF from "./pages/TestPDF";
import AdmissionResultPage from "./pages/AdmissionResult";
import AdmissionResultViewPage from "./pages/AdmissionResultView";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Toploader />
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/staffs" element={<StaffsPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/students/:id" element={<StudentsPage />} />
          <Route path="/admission/home" element={<AdmissoinHome />} />
          <Route
            path="/admission/application-form"
            element={<AdmissionFormPage />}
          />
          <Route
            path="/admission/application-form/preview/:id"
            element={<AdmissionPreviewPage />}
          />
          <Route path="/admission/application/print/:id" element={<TestPDF />} />
          <Route path="/admission/result" element={<AdmissionResultPage />} />
          <Route
            path="/admission/result/:id"
            element={<AdmissionResultViewPage />}
          />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MasterLayout>
    </>
  );
}

export default App;
