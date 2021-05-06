export function addProductToCart(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART', // obrigatorio
    payload: { product } // informações
  };
}

export function clearCart() {
  return { type: 'CLEAR_CART' };
}