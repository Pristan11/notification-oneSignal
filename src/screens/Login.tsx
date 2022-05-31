import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/theme';
import {Icon} from '../components/Icon';
import { ScreenProp } from "../../App";
import { DEVICE, ROUTES, SWITTO_SIZES } from "../utils/constants";

const Login = ({navigation}: ScreenProp) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.main}>
        <View style={styles.logoParentView}>
          <View style={styles.logoView}>
            <Image
              source={require('../../assets/swittoTempImages/homepage/bg.jpg')}
              style={styles.logo}
            />
          </View>

          <View style={styles.roundLogoView}>
            <Image
              source={require('../../assets/switto/common/logo2.png')}
              style={styles.roundLogo}
            />
            <View style={{position: 'absolute', top: DEVICE.width * 0.4}}>
              <Text style={styles.firstTitle}>Switto Rider</Text>
            </View>
            <View>
              <Text style={styles.secondTitle}>
                Welcome back! Please enter your details
              </Text>
              <View style={{width: DEVICE.width * 0.8, marginTop: 20}}>
                <TextInput
                  style={{
                    backgroundColor: COLORS.whitePure,
                    paddingVertical: 5,
                    borderRadius: 3,
                    color: COLORS.textBlack,
                    fontWeight: '500',
                    paddingLeft: 20,
                  }}
                  placeholder={'Email Address'}
                  placeholderTextColor={COLORS.placeHolder}
                />
              </View>
              <View style={{width: DEVICE.width * 0.8, marginTop: 10}}>
                <TextInput
                  style={{
                    backgroundColor: COLORS.whitePure,
                    paddingVertical: 5,
                    borderRadius: 3,
                    color: COLORS.textBlack,
                    fontWeight: '500',
                    paddingLeft: 20,
                  }}
                  placeholder={'Password'}
                  placeholderTextColor={COLORS.placeHolder}
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity
                onPress={()=> navigation.navigate(ROUTES.currentOrders)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: COLORS.greenButton,
                  paddingVertical: 9,
                  paddingHorizontal: 20,
                  borderRadius: 3,
                  marginTop: 12,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: COLORS.whitePure, fontWeight: '500'}}>
                  Login
                </Text>
                <Icon
                  name={'chevron-forward-sharp'}
                  IconType={'Ionicons'}
                  color={COLORS.whitePure}
                  size={'small'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Login;
type Button = {
  backgroundColor: string;
  color: string;
  height?: number | string;
  title: string;
  onPress: () => void;
  style?: any;
  borderWidth?: number;
  borderColor?: any;
  borderRadius?: number;
};
const Button = ({
                  backgroundColor,
                  color,
                  height,
                  title,
                  onPress,
                  style,
                  borderWidth,
                  borderColor,
                  borderRadius,
                }: Button) => (
  <TouchableOpacity
    style={{
      backgroundColor: backgroundColor ? backgroundColor : COLORS.orange,
      borderRadius: borderRadius ? borderRadius : 8,
      borderWidth: borderWidth ? borderWidth : 0,
      borderColor: borderColor ? borderColor : COLORS.white,
      // elevation: 5,
      marginTop: 15,
      ...style,
    }}
    onPress={onPress}>
    <Text
      style={{
        paddingVertical: height ? height : 10,
        color: color ? color : COLORS.white,
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
      }}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.whitePure,
    flex: 1,
  },
  logoParentView: {
    flex: 2.5,
    alignItems: 'center',
  },
  logoView: {},
  logo: {
    height: DEVICE.height,
    width: DEVICE.width,
    borderRadius: 7,
  },
  roundLogoView: {
    position: 'absolute',
    marginTop: DEVICE.width * 0.5,
    width: DEVICE.width,
    alignItems: 'center',
  },
  roundLogo: {
    backgroundColor: COLORS.whitePure,
    width: 160,
    height: 160,
    borderRadius: 80,
    borderColor: COLORS.textOrange,
    borderWidth: 1,
  },
  TextParentView: {
    paddingHorizontal: DEVICE.width * 0.08,
    marginTop: -20,
  },
  firstTitle: {
    paddingHorizontal: 20,
    color: COLORS.whitePure,
    fontSize: 30,
    marginTop: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
  secondTitle: {
    color: COLORS.descriptionText,
    fontSize: SWITTO_SIZES.fontSize,
    marginTop: 60,
    textAlign: 'center',
  },
  buttonsParentView: {
    flex: 1,
    backgroundColor: COLORS.whitePure,
    marginTop: -20,
  },
  buttonsView: {
    paddingHorizontal: '8%',
    marginTop: 20,
  },
  login_container: {
    width: '90%',
    height: '100%',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizoantal: 5,
    zIndex: 10,
    bottom: -1000,
    left: 0,
  },

  login_con_title: {
    width: '100%',
    fontSize: 16,
    color: '#222222',
    paddingBottom: 10,
    marginBottom: 10,
    // borderBottom: 1px solid #e7e7e7,
    borderBottomWidth: 1,
    borderColor: '#e7e7e7',
  },

  login_icon: {
    width: 70,
    fontSize: 22,
    marginTop: 1,
  },

  textbox_con: {
    width: '100%',
  },

  textbox_title: {
    width: '100%',
    fontSize: 13,
    marginVertical: 7,
    color: '#222222',
    fontWeight: '500',
  },

  textbox: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 3,
    color: COLORS.textBlack,
  },

  btn_account: {
    width: '100%',
    // height: 50,
    // borderWidth: 0,
    // borderRadius: 3,
    // backgroundColor: '#0ca74f',
    // color: '#ffffff',
    // fontSize: 14,
    // fontWeight: 500,
    marginTop: 30,
  },

  login_bottom_text: {
    width: '100%',
    color: '#666666',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 10,
  },
});
