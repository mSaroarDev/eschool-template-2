import { getApiUrl } from "../utils/getApiUrl";

const apiUrl = getApiUrl();

// get school info
export const getAllNotices = async (id) => {
  try {
    const res = await fetch(
      apiUrl + "/client/notices/all/" + id + "?page=1&limit=10",
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

// get a notice details
export const getNoticeDetails = async (id) => {
  try {
    const res = await fetch(apiUrl + "/client/notices/" + id, {
      method: "GET",
    });

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
