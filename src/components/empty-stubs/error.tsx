import { Link } from 'react-router-dom';
import { selectError } from '../../store/main-process/selectors';
import { useAppSelector } from '../hooks';
import { AppRoute } from '../../constants';

const Error = () :JSX.Element => {
  const error = useAppSelector(selectError);
  return (
    <div className="page page--favorites-empty">
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Error</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Error</b>
              <Link to={AppRoute.DEFAULT_MAIN} className="login__submit form__submit button" style={{marginTop: 5}}>Перейти на главную</Link>
              <p className="favorites__status-description" style={{fontSize: 12, color: 'red', marginTop: 5}}>{error}</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Error;
