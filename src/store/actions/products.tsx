import axiosInstance from "./../../axios/config";
import { Dispatch } from "redux";

export const getProducts = () => (dispatch: Dispatch) => {
  return axiosInstance.get("products/all").then(
    (res) => {
      dispatch({ type: "GET_PRODUCTS", payload: res.data.data });
    },
    (err) => console.log("err", err)
  );
};

export const getProductById =
  (id: string | undefined) => (dispatch: Dispatch) => {
    return axiosInstance.get(`products/show/${id}`).then(
      (res) => {
        console.log(res.data.data, "res");
        dispatch({ type: "GET_PRODUCT_BY_ID", payload: res.data.data });
      },
      (err) => console.log("err", err)
    );
  };
