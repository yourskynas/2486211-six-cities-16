import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITIES } from './constants';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFavoritesOffersAction, fetchOffersAction } from './store/api-actions';
import Error from './components/empty-stubs/error';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction())
  .then((response) => {
    if (response.meta.requestStatus === 'fulfilled') {
      store.dispatch(fetchFavoritesOffersAction());
    }
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* всё падает, если раскомментировать <Error /> */}
      <App
        cities = {CITIES}
      />
    </Provider>
  </React.StrictMode>
);
