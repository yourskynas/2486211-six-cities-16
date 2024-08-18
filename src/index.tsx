import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AuthorizationStatus, CITIES } from './constants';
import { offer } from './mocks/offer-mocks';
import { reviews } from './mocks/reviews-mocks';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFavoritesOffersAction, fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(fetchFavoritesOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cities = {CITIES}
        offer = {offer}
        reviews={reviews}
        authorizationStatus={AuthorizationStatus.AUTH}
      />
    </Provider>
  </React.StrictMode>
);
