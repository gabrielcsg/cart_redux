import produce from 'immer';

const INITIAL_STATE = {
  items: [],
};

const cart = (state = INITIAL_STATE, action) => {
  // 
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART':
        const { product } = action.payload;

        const productInCartIdx = draft.items.findIndex(item => item.product.id === product.id);

        if (productInCartIdx >= 0) {
          draft.items[productInCartIdx].quantity += 1
        } else {
          draft.items.push({
            product,
            quantity: 1
          });
        }
        break;
      case 'CLEAR_CART':
        draft.items = [];
        break;
      default:
        return draft;
    }
  });
}

export default cart;