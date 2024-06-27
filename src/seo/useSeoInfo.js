import { useEffect, useState } from "react";
import { mySchoolId } from "../utils/getApiUrl";
import { getApiUrl } from "../utils/getApiUrl";

// get school id
const schoolId = mySchoolId();
const apiUrl = getApiUrl();

// keywords
const searchKeywords = "Hello, i, am, fine";
const description = "This is institute description";

// google seo
const googleSEO = {
  title: "",
  description: "",
};

// facebook seo
const facebookSEO = {
  title: "",
  description: "",
  link: "",
};

// get school info
export const getSEOInfo = async () => {
  try {
    const res = await fetch(apiUrl + "/client/school/" + schoolId, {
      method: "GET",
    });

    const data = await res.json();
    const output = {
      schoolInfo: data.data,
      keywords: searchKeywords,
      description: description,
      googleSEO: googleSEO,
      facebookSEO: facebookSEO,
    };
    return output;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const useSEOInfo = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function seoInfo() {
      try {
        const res = await getSEOInfo();
        setInfo(res);
      } catch (error) {
        console.log(error);
      }
    }

    seoInfo();
  }, []);

  return info;
};
