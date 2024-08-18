import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/header';
import { AuthorizationStatus } from '../constants';

type TemplatePageProps = {
  authorizationStatus: keyof typeof AuthorizationStatus;
  favoritesOffersCount?: number;
}

const TemplatePage = ({authorizationStatus, favoritesOffersCount}: TemplatePageProps): JSX.Element => {
  const location = useLocation();
  const classNameByURL = location.pathname.includes('city') ? 'page page--gray page--main' : 'page';

  return (
    <div className={classNameByURL}>
      <Header authorizationStatus={authorizationStatus} favoritesOffersCount={favoritesOffersCount} />
      <Outlet />
    </div>
  );
};

export default TemplatePage;
