import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { useAppSelector } from '../hooks';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';

type FavoriteIconType = {
  nameIcon: string;
  widthIcon: string;
  heightIcon: string;
};

const FavoriteIcon = (props: FavoriteIconType): JSX.Element => {
  const { nameIcon, widthIcon, heightIcon } = props;
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const navigate = useNavigate();
  // const favoriteClass = isFavorite
  //   ? 'place-card__bookmark-button place-card__bookmark-button--active button'
  //   : 'place-card__bookmark-button button';
  const handleButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      navigate(AppRoute.LOGIN);
    }
  };

  return (
    <button className={`${nameIcon}__bookmark-button button`} type="button" onClick={handleButtonClick}>
      <svg className={`${nameIcon}__bookmark-icon`} width={widthIcon} height={heightIcon}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default FavoriteIcon;
