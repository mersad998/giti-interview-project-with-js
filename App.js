import React from 'react';
import Routs from './Routs';
import {StatusBar} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#5c0731" />
        <Routs />
      </>
    );
  }
}
