import axios from "axios";

const baseUrl = "http://192.168.10.4:3000/products";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCT_DETAIL = "SET_PRODUCT_DETAIL";
export const SET_CART = "SET_CART";
export const SET_EDIT_CART = "SET_EDIT_CART";
export const SET_PREVIOUS_SCREEN = "SET_PREVIOUS_SCREEN";
export const SET_INVOICE = "SET_INVOICE";

export const setProducts = (data) => {
  return { type: SET_PRODUCTS, payload: data };
};
export const setProductDetail = (data) => {
  return { type: SET_PRODUCT_DETAIL, payload: data };
};
export const setCart = (data) => {
  return { type: SET_CART, payload: data };
};
export const setEditCart = (data) => {
  return { type: SET_EDIT_CART, payload: data };
};
export const setPreviousScreen = (data) => {
  return { type: SET_PREVIOUS_SCREEN, payload: data };
};
export const setInvoice = (data) => {
  return { type: SET_INVOICE, payload: data };
};

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get(baseUrl)
      .then(({ data }) => {
        dispatch(setProducts(data));
      })
      .catch((err) => console.log(err));
  };
};

export const editCart = (data) => {
  return (dispatch) => {
    const { cart, editCartItem } = data;
    console.log("editCart before", data);
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].code === editCartItem.code) {
        cart[i].quantity = editCartItem.quantity;
        cart[i].note = editCartItem.note;
      }
    }
    console.log("editCart after", cart);

    dispatch(setEditCart(cart));
  };
};
