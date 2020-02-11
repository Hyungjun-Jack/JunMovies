import {createStackNavigator} from 'react-navigation-stack';
import TabNavigation from './TabNavigation';
import DetailScreen from '../screens/Detail';

import {createAppContainer} from 'react-navigation';
import {headerStyles} from './config';

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        header: null,
        // headerTitle: 'Tabs',
        // ...headerStyles,
        // headerStyle: {
        //   backgroundColor: 'blue',
        // },
      },
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        ...headerStyles,
      },
    },
  },
  {
    mode: 'screen',
    headerBackTitleVisible: false,
  },
);

export default createAppContainer(MainNavigation);
