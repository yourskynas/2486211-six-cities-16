import MainPage from './main';

type AppProps = {
  countOffers: number;
}

const App = ({countOffers}: AppProps): JSX.Element => (
  <MainPage countOffers={countOffers} />
);

export default App;
