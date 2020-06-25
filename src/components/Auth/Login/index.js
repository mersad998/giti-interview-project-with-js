import React, {useState, useEffect} from 'react';
import LoginForm from './LoginForm';

export default function LoginPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [infoMessage, setInfoMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const onUserChange = txt => {
    setUsername(txt);
  };

  const onPassChange = txt => {
    setPassword(txt);
  };

  const onForgetPassClick = () => {};

  const onRememberMeClick = () => {
    setRememberMe(!rememberMe);
  };

  const resetError = () => {
    setErrMessage('');
  };
  const resetInfo = () => {
    setInfoMessage('');
  };

  const onLoginClick = () => {
    props.navigation.navigate('Home');
  };
  const onSignUpClick = () => {
    props.navigation.navigate('SignUp');
  };

  return (
    <LoginForm
      username={username}
      password={password}
      errMessage={errMessage}
      isLoading={isLoading}
      rememberMe={rememberMe}
      onUserChange={onUserChange}
      onPassChange={onPassChange}
      loginClick={onLoginClick}
      forgetPassClick={onForgetPassClick}
      rememberMeClick={onRememberMeClick}
      resetError={resetError}
      signUpClick={onSignUpClick}
      infoMessage={infoMessage}
      resetInfo={resetInfo}
      navigation={props.navigation}
    />
  );
}
