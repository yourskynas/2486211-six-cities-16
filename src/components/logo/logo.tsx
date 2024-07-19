type LogoProps = {
  classNameLogo: string;
  imageWidth: string;
  imageHeight: string;
}

const Logo = ({classNameLogo = 'header__logo', imageWidth = '81', imageHeight = '41'}: LogoProps): JSX.Element => {
  const LogoStyle = {
    FOR_LINK: `${classNameLogo}-link`,
    FOR_IMAGE_WIDTH: imageWidth,
    FOR_IMAGE_HEIGHT: imageHeight,
  };

  return (
    <a className={LogoStyle.FOR_LINK}>
      <img className={classNameLogo} src="img/logo.svg" alt="6 cities logo" width={LogoStyle.FOR_IMAGE_WIDTH} height={LogoStyle.FOR_IMAGE_HEIGHT}/>
    </a>
  );
};

export default Logo;
