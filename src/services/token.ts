const SIX_CITIES_TOKEN = 'six-cities-token';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(SIX_CITIES_TOKEN);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(SIX_CITIES_TOKEN, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(SIX_CITIES_TOKEN);
};
