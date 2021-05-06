import { Provider } from 'react-redux';
import { Catalog } from './components/Catalog';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Catalog></Catalog>
    </Provider>
  );
}

export default App;
