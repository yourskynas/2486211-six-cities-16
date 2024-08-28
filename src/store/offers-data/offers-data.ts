import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { changeFavoriteStatus, fetchCommentsAction, fetchFavoritesOffersAction, fetchNearbyOffersAction, fetchOfferAction, fetchOffersAction, postComment } from '../api-actions';
import { OfferType, PlaceOfferType, ReviewType } from '../../types';

type OffersData = {
  offers: PlaceOfferType[];
  currentOffer: OfferType | null;
  comments: ReviewType[];
  nearbyOffers: PlaceOfferType[] | null;
  favoritesOffers: PlaceOfferType[];
  isOffersDataLoading: boolean;
  isOffersError: boolean;
  isOfferDataLoading: boolean;
  isOfferError: boolean;
  isCommentDataLoading: boolean;
  isCommentError: boolean;
  isNearbyOffersDataLoading: boolean;
  isNearbyOffersError: boolean;
  isFavoriteOffersDataLoading: boolean;
  isFavoriteOffersError: boolean;
  isCommentPosting: boolean;
  isCommentPostingError: boolean;
};

const initialState: OffersData = {
  offers: [],
  currentOffer: null,
  comments: [],
  nearbyOffers: null,
  favoritesOffers: [],
  isOffersDataLoading: false,
  isOffersError: false,
  isOfferDataLoading: false,
  isOfferError: false,
  isCommentDataLoading: false,
  isCommentError: false,
  isNearbyOffersDataLoading: false,
  isNearbyOffersError: false,
  isFavoriteOffersDataLoading: false,
  isFavoriteOffersError: false,
  isCommentPosting: false,
  isCommentPostingError: false,
};

export const offersData = createSlice({
  name: NameSpace.DATA,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.isOffersError = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.isOffersError = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
        state.isOfferError = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferDataLoading = false;
        state.isOfferError = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentDataLoading = true;
        state.isCommentError = false;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isCommentDataLoading = false;
        state.isCommentError = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersDataLoading = true;
        state.isNearbyOffersError = false;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.isNearbyOffersDataLoading = false;
        state.isNearbyOffersError = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isNearbyOffersDataLoading = false;
      })
      .addCase(fetchFavoritesOffersAction.pending, (state) => {
        state.isFavoriteOffersDataLoading = true;
        state.isFavoriteOffersError = false;
      })
      .addCase(fetchFavoritesOffersAction.rejected, (state) => {
        state.isFavoriteOffersDataLoading = false;
        state.isFavoriteOffersError = true;
      })
      .addCase(fetchFavoritesOffersAction.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
        state.isFavoriteOffersDataLoading = false;
      })
      .addCase(postComment.pending, (state) => {
        state.isCommentPosting = true;
        state.isCommentPostingError = false;
      })
      .addCase(postComment.rejected, (state) => {
        state.isCommentPosting = false;
        state.isCommentPostingError = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.isCommentPosting = false;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        const index = state.offers.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.offers[index].isFavorite = action.payload.isFavorite;
        }

        state.currentOffer = action.payload;

        if (action.payload.isFavorite) {
          state.favoritesOffers.push(action.payload);
        } else {
          state.favoritesOffers = state.favoritesOffers.filter((item) => item.id !== action.payload.id);
        }
      });
  }
});
