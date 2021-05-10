import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/api';
import { clearCart } from '../store/modules/cart/actions';
import { Cart } from './Cart';
import { CatalogItem } from './CatalogItem';

const Catalog = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

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
        <CatalogItem key={p.id} product={p} />
      ))}
      <Cart />
    </>
  );
};

export { Catalog };