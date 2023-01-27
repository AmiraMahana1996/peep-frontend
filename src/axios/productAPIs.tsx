import axiosInstance from "./config";

//search api
export const getArticlesAPI = (keyword: string) => {
  return axiosInstance.get("/everything", {
    params: {
      q: keyword,
    },
  });
};
