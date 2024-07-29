const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const PLACES_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const CommentLengthLimit = {
  MIN: 50,
  MAX: 300
} as const;

const AppRoute = {
  MAIN: (cityName: string) => `/city/:${cityName}`,
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: (id: string) => `/offer/:id${id}`,
} as const;

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
} as const;

export { CITIES, PLACES_OPTIONS, CommentLengthLimit, AppRoute, AuthorizationStatus };
