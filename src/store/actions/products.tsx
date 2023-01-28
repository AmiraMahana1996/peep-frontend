import axiosInstance from "./../../axios/config";
import { Dispatch } from "redux";

export const getProducts = () => async (dispatch: Dispatch) => {
  const result = await axiosInstance.get("products/all");
  console.log(result.data.data, "daaata");
  dispatch({ type: "GET_PRODUCTS", payload: result.data.data });
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

//add to favorite
export const addProductToFavorite =
  (id: string | undefined, fav: boolean | undefined) =>
  (dispatch: Dispatch) => {
    return axiosInstance
      .put(`products/favorite/${id}`, {
        body: { fav: fav },
      })
      .then(
        (res) => {
          console.log(res.data.data, "res");
          dispatch({ type: "ADD_FAVORITE", payload: res.data.data });
        },
        (err) => console.log("err", err)
      );
  };
