export function addProductToCartRequest(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST', // obrigatorio
    payload: { product } // informações
  };
}

export function addProductToCartSuccess(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: { product }
  };
}

export function addProductToCartFailure(productId) {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: { productId }
  };
}

export function clearCart() {
  return { type: 'CLEAR_CART' };
}