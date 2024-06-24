import { getApiUrl } from "../utils/getApiUrl";

const apiUrl = getApiUrl();

// get school info
export const getAllResults = async (id) => {
  try {
    const res = await fetch(
      apiUrl + "/client/result/all/" + id + "?page=1&limit=10",
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
