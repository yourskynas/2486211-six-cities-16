import { Helmet } from 'react-helmet-async';
import Logo from '../components/logo/logo';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, TextErrorValidation } from '../constants';
import { FormEvent, useRef, useState } from 'react';
import { useAppDispatch } from '../components/hooks';
import { loginAction } from '../store/api-actions';

const STYLE_ERROR = {
  color: 'red',
  marginTop: 0,
  fontSize: 12,
  fontWeight: 300
};

type PasswordType = string | undefined;
type ButtonProps = {
  isDisabled: boolean;
}

const Button = ({isDisabled}: ButtonProps): JSX.Element => (
  <button className="login__submit form__submit button" type="submit" disabled={isDisabled}>Sign in</button>
);

const LoginPage = (): JSX.Element => {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [errorText, setErrorText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsLoading(true);

    if (loginRef.current !== null && passwordRef.current !== null && errorText === '') {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }))
        .then((response) => {
          setIsLoading(false);
          if (response.meta.requestStatus === 'fulfilled') {
            navigate(-1);
          }
        });
    }
  };

  const validatePassword = (password: PasswordType) => {
    let error = false;
    const letterRegex = /[a-zA-Z]/;
    const digitRegex = /\d/;
    setErrorText('');

    if (password && !letterRegex.test(password)) {
      error = true;
      setErrorText(TextErrorValidation.NoLetter);
    }

    if (password && !digitRegex.test(password)) {
      error = true;
      setErrorText(TextErrorValidation.NoNumber);
    }

    if (password && password.includes(' ')) {
      error = true;
      setErrorText(TextErrorValidation.NoSpace);
    }

    return error;
  };

  const handleInputChange = (password: PasswordType) => {
    validatePassword(password);
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities | Login</title>
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
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" ref={loginRef} required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" ref={passwordRef} onChange={() => handleInputChange(passwordRef.current?.value)} required/>
                {errorText !== '' && <p style={STYLE_ERROR}>{errorText}</p>}
              </div>
              {errorText !== '' && !isLoading
                ? <Button isDisabled />
                : <Button isDisabled={false} />}
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.DefaultMain}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
