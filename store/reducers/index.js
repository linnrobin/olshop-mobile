import {
  SET_PRODUCTS,
  SET_PRODUCT_DETAIL,
  SET_CART,
  SET_EDIT_CART,
  SET_PREVIOUS_SCREEN,
  SET_INVOICE,
} from "../actions";

const initialState = {
  products: [],
  product_detail: {},
  cart: [],
  previous_screen: "",
  invoice: {},
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case SET_PRODUCT_DETAIL:
      return { ...state, product_detail: payload };
    case SET_CART:
      return { ...state, cart: [...state.cart, payload] };
    case SET_EDIT_CART:
      return { ...state, cart: payload };
    case SET_PREVIOUS_SCREEN:
      return { ...state, previous_screen: payload };
    case SET_INVOICE:
      return { ...state, invoice: payload };
    default:
      break;
  }
  return state;
}
export default reducer;
