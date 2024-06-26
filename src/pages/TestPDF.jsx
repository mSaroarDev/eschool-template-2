import { PDFViewer } from "@react-pdf/renderer";
import PDFComp from "../components/PDFComp";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAdmission } from "../libs/admissoinAPI";

export default function TestPDF() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // fetch photos
  const [studentPhoto, setStudentPhoto] = useState();
  const [studentSign, setStudentSign] = useState();

  // const schoolId = mySchoolId();
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await getAdmission(id);

    if (res.ok) {
      const data = await res.json();
      setData(data.data);
    } else {
      console.log("Internal server error");
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <PDFViewer style={{height: "100vh", width: "100%", margin: "0px", padding: "0px"}}>
        <PDFComp data={data} />
      </PDFViewer>
    </>
  );
}