import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import {DEVICE, ROUTES, SWITTO_SIZES} from '../utils/constants';
import OrdersTabs from '../screens/OrdersTabs';
import {Text, View} from 'react-native';
import { COLORS } from '../utils/theme';
import { Icon } from "../components/Icon";
const Drawer = createDrawerNavigator();
function CustomDrawer() {
  // @ts-ignore
  return (
    <View style={{backgroundColor: COLORS.whitePure, height: DEVICE.height,}}>
      <View>
      <UserDetail />
      <BackgroundView>
        <View>
          <NameWithIcon icon={'basket'} title={'Order History'} />
          <NameWithIcon icon={'md-wallet'} title={'Tips'} />
          <NameWithIcon icon={'ios-settings'} title={'Edit Profile'} />
          <NameWithIcon icon={'log-out'} title={'logout'} />
        </View>
      </BackgroundView>
      </View>
    </View>
  );
}

function DriverDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.driverDrawer}
      defaultScreenOptions={{
        drawerStyle: {width: DEVICE.width * 0.9, backgroundColor: COLORS.red},
        drawerContentContainerStyle: {width: DEVICE.width*1, backgroundColor: COLORS.red},
        drawerContentStyle: {width: DEVICE.width*0.8}
      }}
      drawerContent={() =><CustomDrawer />}
      screenOptions={() => ({
        headerLeft: () => null,
        headerRight: () => null,
      })}>
      <Drawer.Screen
        name={ROUTES.driverDrawer}
        options={{headerShown: false}}
        component={OrdersTabs}
      />
    </Drawer.Navigator>
  );
}

export default DriverDrawer;


const UserDetail = () => (
  <View style={{paddingHorizontal: 20, marginTop: 20}}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: COLORS.backgroundLightGray,
        }}
      />
      <View style={{paddingLeft: 10}}>
        <Text
          style={{
            color: COLORS.textBlack,
            fontSize: SWITTO_SIZES.fontSize,
            fontWeight: '500',
          }}>
          switto client
        </Text>
        <Text
          style={{
            fontSize: SWITTO_SIZES.smallText,
            color: COLORS.textBlack,
            marginTop: 5,
            fontWeight: '400'
          }}>
          swittoClient@gmail.com
        </Text>
      </View>
    </View>
  </View>
);

type NameWithIconType = {
  icon: string;
  title: string;
};
const NameWithIcon = ({icon, title}: NameWithIconType) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 7}}>
      <Icon
        name={icon}
        size={'icon-size'}
        color={COLORS.textBlack}
        IconType={'Ionicons'}
      />
      <Text
        style={{
          color: COLORS.textBlack,
          fontSize: SWITTO_SIZES.titleSize,
          fontWeight: '500',
          marginLeft: 20,
        }}>
        {title}
      </Text>
    </View>
  );
};

const BackgroundView = ({children}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.backgroundLightGray,
        borderRadius: 8,
        paddingHorizontal: 20,
        marginTop: 80,
        marginHorizontal: 20,
        paddingBottom: 14,
        paddingTop: 7,
      }}>
      {children}
    </View>
  );
};

