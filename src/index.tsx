import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITIES, COUNT_OFFERS, PLACES_OPTIONS } from './constants';
import { placeOffers } from './mocks/places-mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      countOffers = {COUNT_OFFERS}
      cities = {CITIES}
      placesOptions = {PLACES_OPTIONS}
      placeOffers = {placeOffers}
    />
  </React.StrictMode>
);
