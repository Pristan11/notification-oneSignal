import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../utils/constants';
import {COLORS} from '../utils/theme';
import OrderDetail from '../screens/OrderDetail';
import ReadyFoodOrderDetail from '../screens/ReadyFoodOrderDetail';
import Login from '../screens/Login';
import DriverDrawer from './DrawerNavigation';
const Stack = createNativeStackNavigator();

const Routes = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 1}}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={ROUTES.login}>
          <Stack.Screen name={ROUTES.login} component={Login} />
          <Stack.Screen name={ROUTES.driverDrawer} component={DriverDrawer} />
          <Stack.Screen name={ROUTES.orderDetail} component={OrderDetail} />
          <Stack.Screen
            name={ROUTES.readyFoodOrderDetail}
            component={ReadyFoodOrderDetail}
          />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Routes;
