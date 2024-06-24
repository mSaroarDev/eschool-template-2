import { getApiUrl } from "../utils/getApiUrl";
const apiUrl = getApiUrl();

// create admissoin info
export const createAdmission = async (values) => {
  try {
    const res = await fetch(apiUrl + "/client/admission/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// get admission info
export const getAdmission = async (id) => {
  try {
    const res = await fetch(apiUrl + "/client/admission/" + id, {
      method: "GET",
    });

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// confirm admission info
export const submitAdmission = async (id) => {
  try {
    const res = await fetch(apiUrl + "/client/admission/confirm/" + id, {
      method: "POST",
    });

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// get admission info by tracking id
export const getAdmissionByTracking = async (id) => {
  try {
    const res = await fetch(apiUrl + "/client/admission/tracking/" + id, {
      method: "GET",
    });

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
