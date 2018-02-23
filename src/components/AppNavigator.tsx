import { StackNavigator } from 'react-navigation';
import { Home } from './Home';

// tslint:disable-next-line:variable-name
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
