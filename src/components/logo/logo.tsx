import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

type LogoProps = {
  classNameLogo?: string;
  imageWidth?: string;
  imageHeight?: string;
}

const Logo = ({classNameLogo = 'header__logo', imageWidth = '81', imageHeight = '41'}: LogoProps): JSX.Element => {
  const LogoStyle = {
    FOR_LINK: `${classNameLogo}-link`,
    FOR_IMAGE_WIDTH: imageWidth,
    FOR_IMAGE_HEIGHT: imageHeight,
  };

  return (
    // {не уводит на страницу главную, если нажимать на лого на странице авторизации}
    <Link to={AppRoute.DefaultMain} className={LogoStyle.FOR_LINK}>
      <img className={classNameLogo} src="img/logo.svg" alt="6 cities logo" width={LogoStyle.FOR_IMAGE_WIDTH} height={LogoStyle.FOR_IMAGE_HEIGHT}/>
    </Link>
  );
};

export default Logo;
