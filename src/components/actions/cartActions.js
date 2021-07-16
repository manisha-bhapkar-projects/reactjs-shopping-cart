import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  SEARCH,
  LOADER,
} from "./action-types/cart-actions";

//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
// search item
export const search = (value) => ({
  type: SEARCH,
  payload: value
});
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

// infinite scroll

export const loadMoreItems = (page) => {
  return {
    type: LOADER,
    page,
  }
}