import { CITIES, PlacesOption } from './constants';

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
  host: User;
  images: string[];
  maxAdults: number;
};

export type ReviewType = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type MapIconType = {
  iconUrl: string;
  iconSize: [number, number];
  iconAnchor: [number, number];
}

export type MapIconsType = {
  Default: MapIconType;
  Current: MapIconType;
};

export type MapIconsReadonly = Readonly<MapIconsType>;

export type TileLayerType = {
  Url: string;
  Attribution: string;
}

export type PlacesOptionKey = typeof PlacesOption[keyof typeof PlacesOption];

export type CityName = typeof CITIES[number];
