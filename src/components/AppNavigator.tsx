import { StackNavigator } from 'react-navigation';
import { Home } from './Home';

export const AppNavigator = StackNavigator(
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
