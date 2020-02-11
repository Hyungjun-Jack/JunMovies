/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainNavigation from './navigation/MainNavigation';
import {StatusBar} from 'react-native';

class App extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <MainNavigation />
      </>
    );
  }
}

export default App;
