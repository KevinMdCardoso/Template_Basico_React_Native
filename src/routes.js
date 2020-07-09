import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import Main from './pages/Main';

const Routes = createStackNavigator(
  {Main},
  {
    navigationOptions: {
      headerStyle: {backgroundColor: 'green'},
      headerTintColor: '#FFF',
    },
  },
);

export default Routes;
