import { getApiUrl } from "../utils/getApiUrl";
const apiUrl = getApiUrl();

// get school info
export const getAllStaffs = async (schoolId) => {
  try {
    const res = await fetch(apiUrl + "/client/staffs/all/" + schoolId, {
      method: "GET",
    });

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
