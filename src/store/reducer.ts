import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers } from './action';
import { placeOffers } from '../mocks/places-mocks';
import { DEFAULT_CITY } from '../constants';
import { CityName, PlaceOfferType } from '../types';

type InitialState = {
  city: CityName;
  offers: PlaceOfferType[];
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state) => {
      state.offers = placeOffers;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export { reducer };

