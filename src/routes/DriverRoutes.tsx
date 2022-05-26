import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../utils/theme';
import {TabIcon} from '../components/TabIcon';
import {ROUTES} from '../utils/constants';
const BottomTabs = createBottomTabNavigator();
import HomeScreen from '../screens/HomeScreen';
const DriverRoutes = (): JSX.Element => {
  return (
    <>
      <BottomTabs.Navigator
        initialRouteName={ROUTES.driverRoutes.home.root}
        screenOptions={{
          tabBarActiveTintColor: COLORS.orange,
          tabBarInactiveTintColor: COLORS.textBlack,
          tabBarStyle: {
            backgroundColor: '#ecf0f6',
            // paddingVertical: mvs(5),
          },
          tabBarIconStyle: {
            marginTop: 10,
          },
        }}>
        <BottomTabs.Screen
          name={ROUTES.driverRoutes.home.root}
          component={HomeScreen}
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({focused}) => (
              <TabIcon
                name="home-outline"
                focused={focused}
                IconType={'Ionicons'}
              />
            ),
          }}
        />

        <BottomTabs.Screen
          name={ROUTES.driverRoutes.home.orders}
          component={HomeScreen}
          options={{
            headerShown: false,
            title: 'Orders',
            tabBarIcon: ({focused}) => (
              <TabIcon
                name="newspaper-outline"
                IconType="Ionicons"
                focused={focused}
              />
            ),
          }}
        />

        <BottomTabs.Screen
          name={ROUTES.driverRoutes.home.wallet}
          component={HomeScreen}
          options={{
            headerShown: false,
            title: 'wallet',
            tabBarIcon: ({focused}) => (
              <TabIcon
                name="wallet-outline"
                IconType="Ionicons"
                focused={focused}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name={ROUTES.driverRoutes.home.menu}
          component={HomeScreen}
          options={{
            headerShown: false,
            title: 'menu',
            tabBarIcon: ({focused}) => (
              <TabIcon name="md-menu-outline" IconType="Ionicons" focused={focused} />
            ),
          }}
        />
      </BottomTabs.Navigator>
    </>
  );
};

export default DriverRoutes;
