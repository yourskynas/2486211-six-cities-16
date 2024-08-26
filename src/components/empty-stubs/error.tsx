import { selectError } from '../../store/selectors';
import { useAppSelector } from '../hooks';
import Logo from '../logo/logo';

const Error = () :JSX.Element | null => {
  const error = useAppSelector(selectError);
  return (error) ?
    <><Logo />
      <div className="page page--favorites-empty">
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Error</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Error</b>
                <p className="favorites__status-description">{error}</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
    : null;
};

export default Error;
