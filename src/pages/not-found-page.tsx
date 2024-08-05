import { Link } from 'react-router-dom';
import Logo from '../components/logo/logo';
import { AppRoute } from '../constants';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = (): JSX.Element => (
  <div className="page page--gray page--login">
    <Helmet>
      <title>6 cities | Error 404 </title>
    </Helmet>
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
        </div>
      </div>
    </header>

    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">404 | Страница не найдена</h1>
          <div className="login__form form">
            <Link to={AppRoute.DEFAULT_MAIN} className="login__submit form__submit button">Перейти на главную</Link>
          </div>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={AppRoute.DEFAULT_MAIN}>
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default NotFoundPage;
