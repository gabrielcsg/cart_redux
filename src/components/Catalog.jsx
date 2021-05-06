import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../services/api';
import { addProductToCart } from '../store/modules/cart/actions';
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

  return (
    <>
      <h1>Catalog</h1>
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