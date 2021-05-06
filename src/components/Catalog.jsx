import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../services/api';
import { addProductToCart, clearCart } from '../store/modules/cart/actions';
import { Cart } from './Cart';

const Catalog = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  const handleAddProductToCart = useCallback((product) => {
    dispatch(addProductToCart(product))
  }, [dispatch]);

  const handleClearCart = useCallback(() => {
    dispatch(clearCart())
  }, [dispatch]);

  return (
    <>
      <div style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingInline: 10
      }}>
        <h1>Catalog</h1>
        <button style={{
          backgroundColor: 'blue',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: 15,
          maxHeight: 70
        }} onClick={handleClearCart}>LIMPAR CARRINHO</button>
      </div>
      <br />
      <hr />
      {catalog.map(p => (
        <article key={p.id}>
          <strong>{p.title}</strong> {' - '}
          <span>{p.price}</span> {' '}
          <button onClick={() => handleAddProductToCart(p)}>COMPRAR</button>
        </article>
      ))}
      <Cart />
    </>
  );
};

export { Catalog };