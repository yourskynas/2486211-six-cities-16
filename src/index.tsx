import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITIES } from './constants';
import { offer } from './mocks/offer-mocks';
import { reviews } from './mocks/reviews-mocks';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFavoritesOffersAction, fetchOffersAction } from './store/api-actions';
import Error from './components/empty-stubs/error';

store.dispatch(fetchOffersAction());
store.dispatch(fetchFavoritesOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* всё падает, если раскомментировать <Error /> */}
      <App
        cities = {CITIES}
        offer = {offer}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
