import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/theme';
import {DEVICE, SWITTO_SIZES} from '../utils/constants';
import {Icon} from '../components/Icon';

const NewOrder = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.whitePure}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.textOrange}
      />
      <View
        style={{
          height: DEVICE.height * 0.085,
          width: DEVICE.width,
          backgroundColor: COLORS.whitePure,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingTop: 20,
        }}>
        <Image
          source={require('../../assets/iconsImages/logo.png')}
          style={{width: 100, height: 30, marginTop: -20}}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.whitePure,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderWidth: 1,
          borderColor: COLORS.textOrange,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            paddingTop: 30,
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/iconsImages/deliveryboy.png')}
              style={{width: 30, height: 30}}
            />
            <Text
              style={{
                color: COLORS.textBlack,
                fontWeight: '400',
                fontSize: SWITTO_SIZES.smallText,
              }}>
              location1
            </Text>
          </View>

          <View>
            <Image
              source={require('../../assets/iconsImages/right-arrow.png')}
              style={{width: 40, height: 20}}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/iconsImages/restaurant.png')}
              style={{width: 30, height: 30}}
            />
            <Text
              style={{
                color: COLORS.textBlack,
                fontWeight: '400',
                fontSize: SWITTO_SIZES.smallText,
              }}>
              location2
            </Text>
          </View>

          <View>
            <Image
              source={require('../../assets/iconsImages/right-arrow.png')}
              style={{width: 40, height: 20}}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/iconsImages/pin.png')}
              style={{width: 30, height: 30}}
            />
            <Text
              style={{
                color: COLORS.textBlack,
                fontWeight: '400',
                fontSize: SWITTO_SIZES.smallText,
              }}>
              location3
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            backgroundColor: COLORS.backgroundLightGray,
            paddingHorizontal: 30,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 30,
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: SWITTO_SIZES.titleSize,
                color: COLORS.textBlack,
              }}>
              Delivery Request
            </Text>
          </View>
        </View>
        <View style={{paddingTop: 30, paddingHorizontal: 30}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: SWITTO_SIZES.fontSize,
                color: COLORS.textBlack,
                fontWeight: '500',
              }}>
              Harolds Chiken & Bar
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: DEVICE.width * 0.3,
                marginRight: 30,
              }}>
              <Image
                source={require('../../assets/switto/common/star.png')}
                style={{width: 30, height: 30}}
              />
              <Image
                source={require('../../assets/switto/common/star.png')}
                style={{width: 30, height: 30}}
              />
              <Image
                source={require('../../assets/switto/common/star.png')}
                style={{width: 30, height: 30}}
              />
              <Image
                source={require('../../assets/switto/common/star.png')}
                style={{width: 30, height: 30}}
              />
              <Image
                source={require('../../assets/switto/common/star.png')}
                style={{width: 30, height: 30}}
              />
            </View>
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: COLORS.descriptionText,
                  fontSize: SWITTO_SIZES.fontSize,
                  fontWeight: '500',
                  paddingLeft: 30,
                }}>
                Decline
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: COLORS.textOrange,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 30,
              }}>
              <Text
                style={{
                  color: COLORS.whitePure,
                  fontSize: SWITTO_SIZES.titleSize,
                  paddingVertical: 20,
                  marginRight: 20,
                  fontWeight: '700',
                }}>
                Accept
              </Text>
              <Icon
                name={'arrow-forward'}
                color={COLORS.whitePure}
                IconType={'Ionicons'}
                size={'medium'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default NewOrder;

const styles = StyleSheet.create({});
