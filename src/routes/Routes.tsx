import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../utils/constants';
import DriverRoutes from './DriverRoutes';
import {COLORS} from '../utils/theme';
import NewOrder from '../screens/NewOrder';
import PickUpConfirmScreen from '../screens/PickUpConfirmScreen';
import OrderDeliveredConfirm from '../screens/OrderDeliveredConfirm';
import HomeDrawerNavigation from './DrawerNavigation';
import OrdersTabs from '../screens/OrdersTabs';
import OrderDetail from '../screens/OrderDetail';
import ReadyFoodOrderDetail from "../screens/ReadyFoodOrderDetail";
import IntroScreen from "../screens/IntroScreen";
import LoginScreen from "../screens/Login";
import Login from "../screens/Login";
const Stack = createNativeStackNavigator();

const Routes = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 1}}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={ROUTES.login}>
          <Stack.Screen name={ROUTES.login} component={Login} />
          <Stack.Screen name={ROUTES.currentOrders} component={OrdersTabs} />
          <Stack.Screen
            name={ROUTES.orderDetail}
            component={OrderDetail}
          />
          <Stack.Screen name={ROUTES.readyFoodOrderDetail} component={ReadyFoodOrderDetail} />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Routes;
