import { StackNavigator } from 'react-navigation';
import { Main } from './Main';

// tslint:disable-next-line:variable-name
export const AppNavigator = StackNavigator(
  {
    Main: { screen: Main }
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
