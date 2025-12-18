import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';
import { changeFavoriteStatus } from '../../store/api-actions';

type FavoriteIconType = {
  nameIcon: string;
  widthIcon: string;
  heightIcon: string;
  isFavorite: boolean;
  id: string;
};

const FavoriteIcon = (props: FavoriteIconType): JSX.Element => {
  const { nameIcon, widthIcon, heightIcon, isFavorite, id } = props;
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favoriteClass = isFavorite
    ? `${nameIcon}__bookmark-button ${nameIcon}__bookmark-button--active button`
    : `${nameIcon}__bookmark-button button`;
  const handleButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    } else {
      dispatch(changeFavoriteStatus({
        id,
        status: Number(!isFavorite)
      }));
    }
  };

  return (
    <button className={favoriteClass} type="button" onClick={handleButtonClick}>
      <svg className={`${nameIcon}__bookmark-icon`} width={widthIcon} height={heightIcon}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'From' : 'To'} bookmarks</span>
    </button>
  );
};

export default FavoriteIcon;
