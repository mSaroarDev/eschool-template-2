import { getApiUrl } from "../utils/getApiUrl";

const apiUrl = getApiUrl();

// get school info
export const getSchoolInfo = async (id) => {
  try {
    const res = await fetch(apiUrl + "/client/school/" + id, {
      method: "GET",
    });

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
