import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCartRequest } from '../store/modules/cart/actions';


const CatalogItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product]);

  const hasFailedStockCheck = useSelector(state => { return state.cart.failedStockCheck.includes(product.id) });

  return (
    <article>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span> {' '}
      <button onClick={handleAddProductToCart}>COMPRAR</button>

      {
        hasFailedStockCheck &&
        <span style={{ color: 'red' }}>Falta de estoque</span>
      }
    </article>
  );
};

export { CatalogItem };