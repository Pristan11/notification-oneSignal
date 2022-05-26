import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../utils/constants';
import DriverRoutes from './DriverRoutes';
import {COLORS} from '../utils/theme';
import NewOrder from "../screens/NewOrder";
const Stack = createNativeStackNavigator();

const Routes = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 1}}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={ROUTES.intro}>
          <Stack.Screen
            name={ROUTES.login}
            component={DriverRoutes}
          />
          <Stack.Screen
            name={ROUTES.intro}
            component={NewOrder}
          />
          <Stack.Screen
            name={ROUTES.driverRoutes.root}
            component={DriverRoutes}
          />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Routes;
