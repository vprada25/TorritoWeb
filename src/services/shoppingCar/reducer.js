import * as types from "./types";

const initialState = {
  shoppingCar: [], // El estado inicial será un arreglo vacío de productos
};

const shoppingCarReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.ADD_PRODUCT_TO_SHOPPING_CAR:
      /* console.log("Llega a: ", types.ADD_PRODUCT_TO_SHOPPING_CAR);
      console.warn("payload.product: ", payload.product); */
      return { ...state, shoppingCar: [...state.shoppingCar, payload.product] };
    default:
      return state;
  }
};

export default shoppingCarReducer;
