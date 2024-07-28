import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AuthorizationStatus, CITIES, PLACES_OPTIONS } from './constants';
import { placeOffers } from './mocks/places-mocks';
import { offer } from './mocks/offer-mocks';
import { reviews } from './mocks/reviews-mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cities = {CITIES}
      placesOptions = {PLACES_OPTIONS}
      placeOffers = {placeOffers}
      offer = {offer}
      reviews={reviews}
      authorizationStatus={AuthorizationStatus.NO_AUTH}
    />
  </React.StrictMode>
);
