export default function productsReducer(state = [], action: any) {
  switch (action.type) {
    case "GET_PRODUCTS": {
      console.log(action.payload);
      return action.payload;
    }
    case "GET_PRODUCT_BY_ID": {
      console.log(action.payload);
      return action.payload;
    }
    default:
      return state;
  }
}
