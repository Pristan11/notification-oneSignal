import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DEVICE, SWITTO_SIZES} from '../utils/constants';
import {Icon} from '../components/Icon';
import CurrentOrders from './CurrentOrders';
import OrderHistory from './OrderHistory';
import {useNavigation} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();


const OrderTabs = () => {
  const navigation = useNavigation();
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
          paddingVertical: 10,
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/iconsImages/userProfile.png')}
            style={{width: 34, height: 34}}
          />
        </TouchableOpacity>
        <View style={{flex: 1, marginLeft: 10}}>
          <Text
            style={{color: COLORS.whitePure, fontSize: SWITTO_SIZES.fontSize}}>
            Mecheal tisepsh
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon
            name={'menu'}
            IconType={'Ionicons'}
            size={'icon-size'}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.white,
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: COLORS.topTabOrange},
        }}>
        <Tab.Screen
          name="Home"
          options={{tabBarLabel: 'Current Order'}}
          component={CurrentOrders}
        />
        <Tab.Screen
          name="Settings"
          options={{tabBarLabel: 'Order History'}}
          component={OrderHistory}
        />
      </Tab.Navigator>
    </View>
  );
};
export default OrderTabs;

const styles = StyleSheet.create({});
