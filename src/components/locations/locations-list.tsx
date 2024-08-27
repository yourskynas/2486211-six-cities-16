import { Link } from 'react-router-dom';
import { AppRoute, CITIES } from '../../constants';
import { useAppDispatch } from '../hooks';
import { CityName } from '../../types';
import { changeCity } from '../../store/main-process/main-process';

type LocationsProps = {
  cities: typeof CITIES;
  currentCity: CityName;
}

type LocationItemProps = {
  city: CityName;
  currentCity: CityName;
}

const LocationsItem = ({ city, currentCity }: LocationItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const classCityItem = city === currentCity
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link tabs__item';
  return (
    <li onClick={() => dispatch(changeCity(city))} className="locations__item">
      <Link className={classCityItem} to={AppRoute.MAIN(city.toLowerCase())}>
        <span>{city}</span>
      </Link>
    </li>
  );
};

const LocationsList = ({cities, currentCity}: LocationsProps): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => <LocationsItem key={city} city={city} currentCity={currentCity}/>)}
      </ul>
    </section>
  </div>
);

export default LocationsList;
