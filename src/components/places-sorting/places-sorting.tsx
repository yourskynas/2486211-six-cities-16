import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { PlacesOption } from '../../constants';
import { getSortingStatus } from '../../store/action';
import { PlacesOptionKey } from '../../types';
import { selectSortingStatus } from '../../store/selectors';

type OptionProps = {
  option: PlacesOptionKey;
  onClick: (option: PlacesOptionKey) => void;
  sortingStatus: PlacesOptionKey;
}

const PlacesOptions = ({option, onClick, sortingStatus}: OptionProps): JSX.Element => {
  const optionClass = option === sortingStatus
    ? 'places__option places__option--active'
    : 'places__option';

  return (
    <li className={optionClass} tabIndex={0} onClick={() => onClick(option)}>{option}</li>
  );
};

const PlacesSorting = (): JSX.Element => {
  const [isSortingHide, setSortingPopup] = useState<boolean>(false);
  const sortingStatus = useAppSelector(selectSortingStatus);
  const dispatch = useAppDispatch();

  const handleOptionClick = (option: PlacesOptionKey) => {
    dispatch(getSortingStatus(option));
    setSortingPopup(!isSortingHide);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setSortingPopup(!isSortingHide)}>
        {sortingStatus}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref ="#icon-arrow-select"></use>
        </svg>
      </span>
      {isSortingHide ? (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(PlacesOption).map((option) => <PlacesOptions key={option} option={option} onClick={handleOptionClick} sortingStatus={sortingStatus} />)}
        </ul>
      ) : ''}
    </form>
  );
};

export default PlacesSorting;
