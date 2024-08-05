import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

type LocationsProps = {
  cities: string[];
  onCityClick: (currentCity:string) => void;
  currentCity: string;
}

type LocationItemProps = {
  city: string;
  onCityClick: (currentCity:string) => void;
  currentCity: string;
}

const LocationsItem = ({ city, onCityClick, currentCity }: LocationItemProps): JSX.Element => {

  const classCityItem = city === currentCity
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link tabs__item';
  return (
    <li onClick={() => onCityClick(city)} className="locations__item">
      <Link className={classCityItem} to={AppRoute.MAIN(city.toLowerCase())}>
        <span>{city}</span>
      </Link>
    </li>
  );
};

const LocationsList = ({cities, onCityClick, currentCity}: LocationsProps): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => <LocationsItem key={city} city={city} onCityClick={onCityClick} currentCity={currentCity}/>)}
      </ul>
    </section>
  </div>
);

export default LocationsList;
