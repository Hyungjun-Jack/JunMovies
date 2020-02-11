import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MovieScreen from '../screens/Movies';
import TVScreen from '../screens/TV';
import SearchScreen from '../screens/Search';
import {BG_COLOR} from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import {createStack} from './config';

const TabNavigation = createBottomTabNavigator(
  {
    Movies: {
      screen: createStack(MovieScreen, 'Movies'),
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <TabBarIcon
            focused={focused}
            name={Platform.select({
              ios: 'ios-film',
              android: 'md-film',
            })}
          />
        ),
      },
    },
    TV: {
      screen: createStack(TVScreen, 'TV'),
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <TabBarIcon
            focused={focused}
            name={Platform.select({
              ios: 'ios-tv',
              android: 'md-tv',
            })}
          />
        ),
      },
    },
    Search: {
      screen: createStack(SearchScreen, 'Search'),
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <TabBarIcon
            focused={focused}
            name={Platform.select({
              ios: 'ios-search',
              android: 'md-search',
            })}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR,
      },
    },
  },
);

export default createAppContainer(TabNavigation);
