// import { useState } from 'react';

type LocationsProps = {
  cities: string[];
  onCity: (currentCity:string) => void;
  currentCity: string;
}

type LocationItemProps = {
  city: string;
  onCity: (currentCity:string) => void;
  currentCity: string;
}

const LocationsItem = ({ city, onCity, currentCity }: LocationItemProps): JSX.Element => {

  const classCityItem = city === currentCity
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link tabs__item';
  return (
    <li onClick={() => onCity(city)} className="locations__item">
      <a className={classCityItem} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

const LocationsList = ({cities, onCity, currentCity}: LocationsProps): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => <LocationsItem key={city} city={city} onCity={onCity} currentCity={currentCity}/>)}
      </ul>
    </section>
  </div>
);

export default LocationsList;
