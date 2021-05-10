import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addProductToCartFailure, addProductToCartSuccess } from './actions';

function* checkProductStock({ payload }) {
  const { product } = payload;
  const currentQuantity = yield select(state => {
    return state.cart.items.find((item) => item.product.id === product.id)?.quantity ?? 0;
  });

  const availableStockResponse = yield call(api.get, `/stock/${product.id}`);

  console.log(currentQuantity);
  console.log(availableStockResponse.data);
  if (availableStockResponse.data.quantity > currentQuantity) {
    console.log('deu certo');
    yield put(addProductToCartSuccess(product));
  } else {
    console.log('não')
    yield put(addProductToCartFailure(product.id));
  }

}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock),
]);
