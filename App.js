import React from 'react';
import Routs from './Routs';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './__redux/store/index';
const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <StatusBar backgroundColor="#5c0731" />
          <Routs />
        </>
      </Provider>
    );
  }
}
