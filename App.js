/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';

import TabNavigation from './navigation/TabNavigation';

class App extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }

  render() {
    return <TabNavigation />;
  }
}

const styles = StyleSheet.create({});

export default App;
