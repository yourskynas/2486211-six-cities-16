import { NameSpace } from '../../constants';
import { Selector } from '../types/state';

export const selectOffers = (state: Selector) => state[NameSpace.Data].offers;

export const selectCurrentOffer = (state: Selector) => state[NameSpace.Data].currentOffer;

export const selectComments = (state: Selector) => state[NameSpace.Data].comments;

export const selectNearbyOffers = (state: Selector) => state[NameSpace.Data].nearbyOffers;

export const selectFavoritesOffers = (state: Selector) => state[NameSpace.Data].favoritesOffers;

export const selectIsOffersDataLoading = (state: Selector) => state[NameSpace.Data].isOffersDataLoading;

export const selectIsOfferDataLoading = (state: Selector) => state[NameSpace.Data].isOfferDataLoading;

export const selectIsFavoriteOffersDataLoading = (state: Selector) => state[NameSpace.Data].isFavoriteOffersDataLoading;

export const selectIsCommentPosting = (state: Selector) => state[NameSpace.Data].isCommentPosting;

export const selectIsOfferError = (state: Selector) => state[NameSpace.Data].isOfferError;

export const selectIsFavoriteOffersError = (state: Selector) => state[NameSpace.Data].isFavoriteOffersError;
