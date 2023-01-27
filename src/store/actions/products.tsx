import axiosInstance from "./../../axios/config";
import { Dispatch } from "redux";
export const getProducts = () => (dispatch: Dispatch) => {
  return axiosInstance.get("products/all").then(
    (res) => {
      console.log(res.data.data, "res");
      dispatch({ type: "GET_PRODUCTS", payload: res.data.data });
    },
    (err) => console.log("err", err)
  );
};
