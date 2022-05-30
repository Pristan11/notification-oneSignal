import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../utils/theme';
import {DEVICE, SWITTO_SIZES} from '../utils/constants';
import SwitchToggle from 'react-native-switch-toggle';

const HomeScreen = () => {
  const [on, setOn] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.backgroundLightGray}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.textOrange}
      />
      <View
        style={{
          height: DEVICE.height * 0.085,
          width: DEVICE.width,
          backgroundColor: COLORS.textOrange,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 20,
        }}>
        <Image
          source={require('../../assets/iconsImages/userProfile.png')}
          style={{width: 34, height: 34}}
        />
        <View>
          <SwitchToggle
            switchOn={on}
            onPress={() => setOn(!on)}
            containerStyle={{
              width: 85,
              height: 26,
              borderRadius: 13,
              paddingLeft: 12,
            }}
            backgroundColorOn={COLORS.whitePure}
            backgroundColorOff={COLORS.whitePure}
            backTextLeft={on ? 'online' : ''}
            backTextRight={!on ? 'offline' : ''}
            textRightStyle={{color: COLORS.placeHolder, fontWeight: '400'}}
            textLeftStyle={{color: COLORS.textOrange, fontWeight: '600'}}
            rightContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              right: 10,
            }}
            circleColorOff={COLORS.descriptionText}
            circleColorOn={COLORS.greenButton}
            circleStyle={{
              position: 'absolute',
              width: 27,
              height: 27,
              borderRadius: 14,
            }}
          />
        </View>
      </View>
      <View
        style={{
          height: 50,
          width: DEVICE.width,
          backgroundColor: COLORS.whitePure,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/iconsImages/baby-car.png')}
            style={{height: 20, width: 30}}
          />
          <View
            style={{
              justifyContent: 'flex-start',
              paddingVertical: 10,
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontSize: SWITTO_SIZES.smallText,
                color: COLORS.textBlack,
                fontWeight: '500',
              }}>
              Micheal{' '}
            </Text>
            <Text
              style={{
                fontSize: SWITTO_SIZES.smallText,
                color: COLORS.textBlack,
                fontWeight: '300',
              }}>
              NP 32424
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
