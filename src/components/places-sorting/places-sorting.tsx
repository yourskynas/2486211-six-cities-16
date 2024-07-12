
type OptionsProps = {
  placesOptions: string[];
}
const PlacesOptions = ({option}): JSX.Element => {
  const optionClass = option === 'Popular'
    ? 'places__option places__option--active'
    : 'places__option';

  return (
    <li className={optionClass} tabIndex={0}>{option}</li>
  );
};

const PlacesSorting = ({placesOptions}: OptionsProps): JSX.Element => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex={0}>
                    Popular
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref ="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      {placesOptions.map((option) => <PlacesOptions key={option} option={option} />)}
    </ul>
  </form>
);

export default PlacesSorting;
