import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/header';
import { AppRoute, AuthorizationStatus } from '../constants';

type TemplatePageProps = {
  authorizationStatus: keyof typeof AuthorizationStatus;
  currentCity: string;
}

const TemplatePage = ({authorizationStatus, currentCity}: TemplatePageProps): JSX.Element => {
  const location = useLocation();

  const classNameByURL = location.pathname === AppRoute.MAIN(currentCity) ? 'page page--gray page--main' : 'page';

  return (
    <div className={classNameByURL}>
      <Header authorizationStatus={authorizationStatus} />
      <Outlet />
    </div>
  );
};

export default TemplatePage;
