import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../utils/theme';
import SignUpPopup from '../components/SignUpPopup';
import LoginPopUp from '../components/LoginPopup';
import {DEVICE} from '../utils/constants';

const {width} = Dimensions.get('window');
const IntroScreen = () => {
  const [loading, setLoading] = useState(true);
  const [loginPopupShow, setLoginPopupShow] = useState(false);
  const [signUpPopupShow, setSignUpPopupShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.whitePure,
          paddingHorizontal: 20,
        }}>
        <Image
          source={require('../../assets/switto-animated/SwittoLogo.gif')}
          style={{
            width: DEVICE.width - 40,
            height: DEVICE.height - DEVICE.height * 0.6,
            marginTop: DEVICE.height * 0.3,
          }}
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
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
          </View>

          <View style={{position: 'absolute', top: -80, right: -40}}>
            <Image
              source={require('../../assets/swittoTempImages/homepage/home.png')}
              style={{width: 200, height: 200}}
            />
          </View>
          <View style={{position: 'absolute', top: width * 0.75, left: -110}}>
            <Image
              source={require('../../assets/swittoTempImages/homepage/home2.png')}
              style={{width: 200, height: 140}}
            />
          </View>
          <View style={{position: 'absolute', top: width * 0.4}}>
            <Text style={styles.firstTitle}>
              The Experience of Buying Food Quickly
            </Text>
          </View>
        </View>
        <View style={styles.buttonsParentView}>
          <View style={styles.buttonsView}>
            <View style={styles.TextParentView}>
              <Text style={styles.secondTitle}>
                Use your switto account to get started
              </Text>
            </View>
            <Button
              backgroundColor={COLORS.whitePure}
              borderRadius={3}
              borderColor={COLORS.orange}
              borderWidth={2}
              color={COLORS.textOrange}
              title="Login"
              onPress={() => {
                // navigation.navigate(ROUTES.USER_ROUTES.login);
                setLoginPopupShow(true);
              }}
            />
            <Button
              backgroundColor={COLORS.orange}
              color={COLORS.white}
              borderRadius={3}
              borderColor={COLORS.orange}
              borderWidth={2}
              title="Sign Up"
              onPress={() => setSignUpPopupShow(true)}
            />
          </View>
        </View>
      </View>
      {signUpPopupShow && (
        <SignUpPopup onClose={() => setSignUpPopupShow(false)} />
      )}

      {/*login*/}
      {loginPopupShow && (
        <LoginPopUp onClose={() => setLoginPopupShow(false)} />
      )}
    </View>
  );
};
export default IntroScreen;
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
  logoView: {
    borderRadius: 7,
  },
  logo: {
    height: width,
    borderRadius: 7,
  },
  roundLogoView: {
    position: 'absolute',
    marginTop: width * 0.78,
  },
  roundLogo: {
    backgroundColor: COLORS.whitePure,
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  TextParentView: {
    paddingHorizontal: width * 0.08,
    marginTop: -20,
  },
  firstTitle: {
    paddingHorizontal: 20,
    color: COLORS.whitePure,
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
  },
  secondTitle: {
    color: COLORS.descriptionText,
    fontSize: 13,
    marginTop: 10,
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
