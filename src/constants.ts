import { MapIconsType, TileLayerType } from './types';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const DEFAULT_CITY = 'Paris';

const PLACES_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const CommentLengthLimit = {
  MIN: 50,
  MAX: 300
} as const;

const AppRoute = {
  DEFAULT_MAIN: 'city/paris',
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

const MapIcon: MapIconsType = {
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
} as const;

const TileLayer: TileLayerType = {
  URL: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
} as const;

export { CITIES, PLACES_OPTIONS, CommentLengthLimit, AppRoute, AuthorizationStatus, DEFAULT_CITY, MapIcon, TileLayer};
