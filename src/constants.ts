import { MapIconsReadonly, TileLayerType } from './types';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const DEFAULT_CITY = CITIES[0];

const RATINGS = [5 , 4 , 3 , 2 , 1] as const;

const PlacesOption = {
  Popular: 'Popular',
  PriceIncrease: 'Price: low to high',
  PriceReduction: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;

const CommentLengthLimit = {
  Min: 50,
  Max: 300
} as const;

const AppRoute = {
  DefaultMain: '/city/paris',
  Main: (cityName: string) => `/city/${cityName.toLowerCase()}`,
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

const AuthorizationStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;

const UrlMarker = {
  Default: 'img/pin.svg',
  Current: 'img/pin-active.svg'
} as const;

const MapIcon: MapIconsReadonly = {
  Default: {
    iconUrl: UrlMarker.Default,
    iconSize: [27, 40],
    iconAnchor: [13, 40],
  },
  Current: {
    iconUrl: UrlMarker.Current,
    iconSize: [27, 40],
    iconAnchor: [13, 40],
  }
};

const TileLayer: TileLayerType = {
  Url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
} as const;

const APIRoute = {
  Offers: '/offers',
  Favorite: '/favorite',
  Login: '/login',
  Logout: '/logout',
  Comments: '/comments',
} as const;

const TextErrorValidation = {
  NoLetter: 'Введите хотя бы одну букву',
  NoNumber: 'Введите хотя бы одну цифру',
  NoSpace: 'Не должно быть пробелов'
} as const;

const NameSpace = {
  User: 'USER',
  Data: 'DATA',
  Main: 'MAIN',
} as const;

const RatingTitle = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
} as const;

export { CITIES, RATINGS, CommentLengthLimit, AppRoute, AuthorizationStatus, DEFAULT_CITY, MapIcon, TileLayer, PlacesOption, APIRoute, TextErrorValidation, NameSpace, RatingTitle};
