import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITIES, PLACES_OPTIONS } from './constants';
import { placeOffers } from './mocks/places-mocks';
import { offer } from './mocks/offer-mocks';

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
    />
  </React.StrictMode>
);
