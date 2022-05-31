import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import {mvs} from 'react-native-size-matters';
import {COLORS} from '../utils/theme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "./HomeScreen";
import { DEVICE, SWITTO_SIZES } from "../utils/constants";
import SwitchToggle from "react-native-switch-toggle";
import { Icon } from "../components/Icon";
import CurrentOrders from "./CurrentOrders";
import OrderHistory from "./OrderHistory";

  const Tab = createMaterialTopTabNavigator();
const OrderTabs = () => {

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: DEVICE.width,
          backgroundColor: COLORS.topHeaderOrange,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 10
        }}>
        <TouchableOpacity >
          <Image
            source={require('../../assets/iconsImages/userProfile.png')}
            style={{width: 34, height: 34}}
          />
        </TouchableOpacity>
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={{color: COLORS.whitePure, fontSize: SWITTO_SIZES.fontSize}}>Mecheal tisepsh</Text>
        </View>
        <Icon name={'menu'} IconType={'Ionicons'} size={'icon-size'} color={COLORS.white} />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.white,
          tabBarLabelStyle: { fontSize: 12 , },
          tabBarStyle: { backgroundColor: COLORS.topTabOrange },
        }}>
        <Tab.Screen name="Home"  options={{ tabBarLabel: 'Current Order' }} component={CurrentOrders} />
        <Tab.Screen name="Settings"  options={{ tabBarLabel: 'Order History' }} component={OrderHistory} />
      </Tab.Navigator>
    </View>
  );
};
export default OrderTabs;

const styles = StyleSheet.create({

});

