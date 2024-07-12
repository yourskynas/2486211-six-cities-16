import MainPage from '../main-page';

type PlaceOffersProps = {
  id: string;
    title: string;
    type: string;
    price: number;
    previewImage: string;
    city: {
        name: string;
        location: {
            latitude: number;
            longitude: number;
            zoom: number;
        };
    };
    location: {
        latitude: number;
        longitude: number;
        zoom: number;
    };
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
}[];

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
