import { PlacesOption } from './constants';
import { CityName, PlaceOfferType } from './types';

const ratingInProcent = (rating: number): string => {
  const procent = 100;
  const ratingScale = 5;
  return `${(rating / ratingScale) * procent}%`;
};

const humanizingDate = (value: string) => {
  const date = new Date(value);
  const formatedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
  return formatedDate;
};

const groupByCity = (offers: PlaceOfferType[], isFavoritePage = false) => offers.reduce((group: Record<CityName, PlaceOfferType[]>, offer: PlaceOfferType) => {
  const city = offer.city.name;
  group[city] = group[city] ?? [];
  if (isFavoritePage && offer && offer.isFavorite) {
    group[city].push(offer);
  } else if (!isFavoritePage) {
    group[city].push(offer);
  }
  return group;
}, {});

const sortingPlaces = {
  [PlacesOption.POPULAR]: (offers: PlaceOfferType[]) => offers,
  [PlacesOption.PRICE_INCREASE]: (offers: PlaceOfferType[]) => offers.sort((offerA, offerB) => offerA.price - offerB.price),
  [PlacesOption.PRICE_REDUCTION]: (offers: PlaceOfferType[]) => offers.sort((offerA, offerB) => offerB.price - offerA.price),
  [PlacesOption.TOP_RATED]: (offers: PlaceOfferType[]) => offers.sort((offerA, offerB) => offerB.rating - offerA.rating),
};

export { ratingInProcent, humanizingDate, groupByCity, sortingPlaces };
