export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  name: string;
  location: LocationType;
}

export type PlaceOfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage?: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type OfferType = PlaceOfferType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
};

export type ReviewType = {
  id: string;
  date: string;
  user: {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  };
  comment: string;
  rating: number;
};
