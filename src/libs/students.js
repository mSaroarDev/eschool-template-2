import { getApiUrl } from "../utils/getApiUrl";
const apiUrl = getApiUrl();

// get school info
export const getAllStudents = async (schoolId, page, limit, classe) => {
  try {
    const res = await fetch(
      apiUrl + "/client/students/all/" + schoolId + `?class=${classe}`,
      {
        method: "GET",
      }
    );

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// get school info
export const getAllClassStudents = async (schoolId, page, limit) => {
  try {
    const res = await fetch(
      apiUrl +
        "/client/students/all-class/" +
        schoolId +
        `?page=${parseInt(page)}&limit=${parseInt(limit)}`,
      {
        method: "GET",
      }
    );

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
