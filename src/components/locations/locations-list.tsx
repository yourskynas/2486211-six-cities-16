type LocationsProps = {
  cities: string[];
}

type LocationItemProps = {
  city: string;
}

const LocationsItem = ({ city }: LocationItemProps): JSX.Element => {
  const classCityItem = city === 'Amsterdam'
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link tabs__item';
  return (
    <li className="locations__item">
      <a className={classCityItem} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

const LocationsList = ({cities}: LocationsProps): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => <LocationsItem key={city} city={city} />)}
      </ul>
    </section>
  </div>
);

export default LocationsList;
