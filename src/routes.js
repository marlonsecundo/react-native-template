import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Main } from '~/pages';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default Routes;
