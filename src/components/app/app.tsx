import { PlaceOfferType } from '../../types';
import MainPage from '../../pages/main-page';

type PlaceOffersProps = PlaceOfferType[];

type AppProps = {
  countOffers: number;
  cities: string[];
  placesOptions: string[];
  placeOffers: PlaceOffersProps;
}

const App = ({countOffers, cities, placesOptions, placeOffers}: AppProps): JSX.Element => (
  <MainPage
    countOffers={countOffers}
    cities={cities}
    placesOptions={placesOptions}
    placeOffers={placeOffers}
  />
);

export default App;
