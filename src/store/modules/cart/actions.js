export function addProductToCart(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART', // obrigatorio
    payload: { product } // informações
  };
}