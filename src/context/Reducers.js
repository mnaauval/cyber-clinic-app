export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...payload, quantity: 1 }] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((c) => c.id !== payload.id) };
    default:
      return state;
  }
};
