import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { fetchCommentsAction, fetchFavoritesOffersAction, fetchNearbyOffersAction, fetchOfferAction, fetchOffersAction, postComment } from '../api-actions';
import { OfferType, PlaceOfferType, ReviewType } from '../../types';

type OffersData = {
  offers: PlaceOfferType[];
  currentOffer: OfferType | null;
  comments: ReviewType[];
  nearbyOffers: PlaceOfferType[] | null;
  favoritesOffers: PlaceOfferType[];
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  isCommentDataLoading: boolean;
  isNearbyOffersDataLoading: boolean;
  isFavoriteOffersDataLoading: boolean;
  isCommentPosting: boolean;
};

const initialState: OffersData = {
  offers: [],
  currentOffer: null,
  comments: [],
  nearbyOffers: null,
  favoritesOffers: [],
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  isCommentDataLoading: false,
  isNearbyOffersDataLoading: false,
  isFavoriteOffersDataLoading: false,
  isCommentPosting: false,
};

export const offersData = createSlice({
  name: NameSpace.DATA,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentDataLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isNearbyOffersDataLoading = false;
      })
      .addCase(fetchFavoritesOffersAction.pending, (state) => {
        state.isFavoriteOffersDataLoading = true;
      })
      .addCase(fetchFavoritesOffersAction.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
        state.isFavoriteOffersDataLoading = false;
      })
      .addCase(postComment.pending, (state) => {
        state.isCommentPosting = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.isCommentPosting = false;
      });
  }
});
