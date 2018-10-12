import { createStackNavigator } from 'react-navigation';
import { Home } from './Home';

export const AppNavigator = createStackNavigator(
  {
    Main: { screen: Home }
  },
  {
    navigationOptions: {
      headerStyle: {
      },
      headerTitleStyle: {
      },
      headerBackTitle: null
    }
  }
);
