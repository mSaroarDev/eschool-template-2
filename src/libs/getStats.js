import { getApiUrl } from "../utils/getApiUrl";

// get school id
const baseUrl = getApiUrl();

export const getStats = async (schoolId) => {
  const res = await fetch(baseUrl + `/client/stats/all/` + schoolId);

  return res;
};
