import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import Logo from '../logo/logo';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch } from '../hooks';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../store/main-process/selectors';

type HeaderProps = {
  authorizationStatus?: keyof typeof AuthorizationStatus;
  favoritesOffersCount?: number;
}

type NavigateForUserProps = {
  favoritesOffersCount?: number;
}

const NavigateForUser = ({favoritesOffersCount}: NavigateForUserProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const userName = useSelector(selectUserName);
  const handleLoginClick = () => {
    dispatch(logoutAction());
  };
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{userName}</span>
          <span className="header__favorite-count">{favoritesOffersCount}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.LOGIN}>
          <span className="header__signout" onClick={handleLoginClick}>Sign out</span>
        </Link>
      </li>
    </>
  );
};

const NavigateForLogin = (): JSX.Element => (
  <li className="header__nav-item user">
    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.LOGIN}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>
  </li>
);

const Header = ({authorizationStatus, favoritesOffersCount}: HeaderProps): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {authorizationStatus === AuthorizationStatus.AUTH ? <NavigateForUser favoritesOffersCount={favoritesOffersCount} /> : <NavigateForLogin />}
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
