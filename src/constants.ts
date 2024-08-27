import { MapIconsReadonly, TileLayerType } from './types';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const DEFAULT_CITY = CITIES[0];

const RATINGS = [5 , 4 , 3 , 2 , 1] as const;

const PlacesOption = {
  POPULAR: 'Popular',
  PRICE_INCREASE: 'Price: low to high',
  PRICE_REDUCTION: 'Price: high to low',
  TOP_RATED: 'Top rated first',
} as const;

const CommentLengthLimit = {
  MIN: 50,
  MAX: 300
} as const;

const AppRoute = {
  DEFAULT_MAIN: '/city/paris',
  MAIN: (cityName: string) => `/city/${cityName.toLowerCase()}`,
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
} as const;

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
} as const;

const UrlMarker = {
  DEFAULT: 'img/pin.svg',
  CURRENT: 'img/pin-active.svg'
} as const;

const MapIcon: MapIconsReadonly = {
  DEFAULT: {
    iconUrl: UrlMarker.DEFAULT,
    iconSize: [27, 40],
    iconAnchor: [13, 40],
  },
  CURRENT: {
    iconUrl: UrlMarker.CURRENT,
    iconSize: [27, 40],
    iconAnchor: [13, 40],
  }
};

const TileLayer: TileLayerType = {
  URL: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
} as const;

const APIRoute = {
  OFFERS: '/offers',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments',
} as const;

const TextErrorValidation = {
  NO_LETTER: 'Введите хотя бы одну букву',
  NO_NUMBER: 'Введите хотя бы одну цифру',
  NO_SPACE: 'Не должно быть пробелов'
} as const;

const NameSpace = {
  USER: 'USER',
  DATA: 'DATA',
  MAIN: 'MAIN',
} as const;

const RatingTitle = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
} as const;

export { CITIES, RATINGS, CommentLengthLimit, AppRoute, AuthorizationStatus, DEFAULT_CITY, MapIcon, TileLayer, PlacesOption, APIRoute, TextErrorValidation, NameSpace, RatingTitle};
