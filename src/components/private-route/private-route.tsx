import { Location, Navigate, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { useAppSelector } from '../hooks';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
  forNonAuthOnly?: boolean;
}

type LocationType = {
  from?: Location;
}

function PrivateRoute({ children, forNonAuthOnly }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const location: Location<LocationType> = useLocation() as Location<LocationType>;
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  if (isAuthorized && forNonAuthOnly) {
    const from = location.state?.from || { pathname: AppRoute.DefaultMain };
    return <Navigate to={from} />;
  }

  if (!isAuthorized && !forNonAuthOnly) {
    return <Navigate state={{ from: location }} to={AppRoute.Login} />;
  }

  return children;
}
export default PrivateRoute;
