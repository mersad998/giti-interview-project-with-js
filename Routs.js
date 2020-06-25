import React from 'react';
import {fromRight} from 'react-navigation-transitions';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

// --------------------------------------------[صفحه ها ی برنامه]------------------------------------

// صفحه اسپلش
import SplashScreen from 'components/SplashScreen';
// صفحه ورود
import LoginPage from 'components/Auth/Login';
// صفحه اصلی
import Home from 'components/HomePage/Home';
// ثبت نام
import SignUp from 'components/Auth/SignUp/SignUp';
// جزعیات عکس
import Detailes from 'components/DetailesPage/Detailes';

export default function Routs() {
  const routs = createStackNavigator(
    {
      SplashScreen,
      LoginPage,
      Home,
      SignUp,
      Detailes,
    },
    {
      initialRouteName: 'SplashScreen',
      headerMode: 'none',
      transitionConfig: () => fromRight(150),
    },
  );
  const App = createAppContainer(routs);
  return <App />;
}
