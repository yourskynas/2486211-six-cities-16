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
import { selectAuthorizationStatus, selectFavoritesOffers, selectOffers } from '../../store/selectors';

type AppProps = {
  cities: string[];
}

const App = ({cities}: AppProps): JSX.Element => {
  const offers = useAppSelector(selectOffers);
  const favoritesOffers = useAppSelector(selectFavoritesOffers);
  // const isOffersDataLoading = useAppSelector(selectIsOffersDataLoading);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  // почему-то тоже падает
  // if (isOffersDataLoading) {
  //   return (
  //     <NotFoundPage />
  //   );
  // }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<TemplatePage authorizationStatus={authorizationStatus} favoritesOffersCount={favoritesOffers.length} />}>
            <Route index element={<Navigate to={AppRoute.DEFAULT_MAIN} />} />
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
              path={AppRoute.OFFER}
              element={
                <OfferPage />
              }
            />
            <Route
              path={AppRoute.FAVORITES}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus} >
                  <FavoritesPage favoritesOffers={favoritesOffers} />
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path={AppRoute.LOGIN}
            element={<LoginPage />}
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
