import Logo from '../logo/logo';

type HeaderProps = {
  user?: boolean;
}

const NavForUser = (): JSX.Element => (
  <>
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
        <span className="header__favorite-count">3</span>
      </a>
    </li>
    <li className="header__nav-item">
      <a className="header__nav-link" href="#">
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  </>
);

const NavForLogin = (): JSX.Element => (
  <li className="header__nav-item user">
    <a className="header__nav-link header__nav-link--profile" href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </a>
  </li>
);

const Header = ({user = true}: HeaderProps): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {user ? <NavForUser /> : <NavForLogin />}
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
