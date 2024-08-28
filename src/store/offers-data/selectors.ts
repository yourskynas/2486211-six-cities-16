import { NameSpace } from '../../constants';
import { Selector } from '../types/state';

export const selectOffers = (state: Selector) => state[NameSpace.DATA].offers;

export const selectCurrentOffer = (state: Selector) => state[NameSpace.DATA].currentOffer;

export const selectComments = (state: Selector) => state[NameSpace.DATA].comments;

export const selectNearbyOffers = (state: Selector) => state[NameSpace.DATA].nearbyOffers;

export const selectFavoritesOffers = (state: Selector) => state[NameSpace.DATA].favoritesOffers;

export const selectIsOffersDataLoading = (state: Selector) => state[NameSpace.DATA].isOffersDataLoading;

export const selectIsOfferDataLoading = (state: Selector) => state[NameSpace.DATA].isOfferDataLoading;

export const selectIsCommentDataLoading = (state: Selector) => state[NameSpace.DATA].isCommentDataLoading;

export const selectIsNearbyOffersDataLoading = (state: Selector) => state[NameSpace.DATA].isNearbyOffersDataLoading;

export const selectIsFavoriteOffersDataLoading = (state: Selector) => state[NameSpace.DATA].isFavoriteOffersDataLoading;

export const selectIsCommentPosting = (state: Selector) => state[NameSpace.DATA].isCommentPosting;

export const selectIsOffersError = (state: Selector) => state[NameSpace.DATA].isOffersError;

export const selectIsOfferError = (state: Selector) => state[NameSpace.DATA].isOfferError;

export const selectIsCommentError = (state: Selector) => state[NameSpace.DATA].isCommentError;

export const selectIsNearbyOffersError = (state: Selector) => state[NameSpace.DATA].isNearbyOffersError;

export const selectIsFavoriteOffersError = (state: Selector) => state[NameSpace.DATA].isFavoriteOffersError;

export const selectIsCommentPostingError = (state: Selector) => state[NameSpace.DATA].isCommentPostingError;
