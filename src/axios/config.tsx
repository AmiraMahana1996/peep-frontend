import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apiKey: "5bb3f7c3d7c049dea9425d57e5561caa",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // SHOW LOADER WHEN REQUEST FIRES
    //   store.dispatch(setLoader(true));
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // HIDE LOADER WHEN RESPONSE RETURNS
    //   store.dispatch(setLoader(false));
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
