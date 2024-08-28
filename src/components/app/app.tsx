import MainPage from '../../pages/main-page';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute, CITIES } from '../../constants';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import FavoritesPage from '../../pages/favorites-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import TemplatePage from '../../pages/template-page';
import { useAppSelector } from '../hooks';
import { groupByCity } from '../../utils';
import { selectFavoritesOffers, selectIsOffersDataLoading, selectOffers } from '../../store/offers-data/selectors';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';
import Loading from '../empty-stubs/loading';

type AppProps = {
  cities: string[];
}

const App = ({cities}: AppProps): JSX.Element => {
  const offers = useAppSelector(selectOffers);
  const favoritesOffers = useAppSelector(selectFavoritesOffers);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(selectIsOffersDataLoading);

  if (isOffersDataLoading) {
    return <Loading />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<TemplatePage authorizationStatus={authorizationStatus} favoritesOffersCount={favoritesOffers.length} />}>
            <Route index element={<Navigate to={AppRoute.DefaultMain} />} />
            {CITIES.map((city) => (
              <Route path={`city/${city.toLowerCase()}`}
                key={city} element={
                  <MainPage
                    cities={cities}
                    groupedOffersByCities={groupByCity(offers)}
                  />
                }
              />
            ))}
            <Route
              path={AppRoute.Offer}
              element={
                <OfferPage />
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <FavoritesPage favoritesOffers={favoritesOffers} />
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute forNonAuthOnly>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
