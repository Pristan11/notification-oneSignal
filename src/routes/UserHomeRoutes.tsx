import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../utils/constants';
import HomeDrawerNavigation from './DrawerNavigation';
import RestaurantDetail from '../screens/RestaurantDetail';
import FoodDetail from '../screens/FoodDetail';
const Stack = createNativeStackNavigator();

function UserHomeStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.USER_ROUTES.home.drawer}
        options={{headerShown: false}}
        component={HomeDrawerNavigation}
      />
      <Stack.Screen
        name={ROUTES.USER_ROUTES.home.shop}
        options={{headerShown: false, animation: 'slide_from_right'}}
        component={RestaurantDetail}
      />
      <Stack.Screen
        name={ROUTES.USER_ROUTES.home.productDetail}
        options={{headerShown: false, animation: 'slide_from_right'}}
        component={FoodDetail}
      />
    </Stack.Navigator>
  );
}

export default UserHomeStack;
