import {
  FlatList,
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
import {CheckBox} from 'react-native-elements';

const PickUpConfirmationScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.cardBackground}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.textOrange}
      />
      <View
        style={{
          height: DEVICE.height * 0.21,
          width: DEVICE.width,
          backgroundColor: COLORS.textOrange,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity style={{marginTop: 10}}>
            <Icon
              name={'arrow-back'}
              IconType={'Ionicons'}
              size={'small'}
              color={COLORS.whitePure}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              color: COLORS.whitePure,
              fontSize: SWITTO_SIZES.titleSize,
              fontWeight: '400',
            }}>
            Delivery
          </Text>
          <TouchableOpacity style={{marginTop: 10}}>
            <Icon
              name={'dots-vertical'}
              size={'small'}
              color={COLORS.whitePure}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/switto-mobile-images/restaurant/1.jpg')}
            style={{width: 54, height: 54, borderRadius: 27}}
          />
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontSize: SWITTO_SIZES.fontSize,
                color: COLORS.whitePure,
                fontWeight: '500',
                marginLeft: 10,
              }}>
              Harolds Chiken & Bar{' '}
            </Text>
            <Text
              style={{
                fontSize: SWITTO_SIZES.smallText,
                color: COLORS.cardBackground,
                fontWeight: '400',
                marginLeft: 10,
                marginTop: 10,
              }}>
              117 Colombo - Batticaloa Hwy, Colombo
            </Text>
          </View>
        </View>
      </View>

      {/*orderIdView*/}

      <View
        style={{
          width: DEVICE.width * 0.7,
          backgroundColor: COLORS.whitePure,
          position: 'absolute',
          top: DEVICE.height * 0.15,
          height: 100,
          marginLeft: DEVICE.width * 0.15,
          borderRadius: 8,
          elevation: 10,
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '500',
              fontSize: SWITTO_SIZES.fontSize,
              paddingTop: 10,
            }}>
            Order Pick Up
          </Text>
          <Text
            style={{
              color: COLORS.red,
              fontWeight: '500',
              fontSize: SWITTO_SIZES.fontSize,
              paddingTop: 10,
            }}>
            Order #492734
          </Text>
          <Text
            style={{
              color: COLORS.descriptionText,
              paddingBottom: 10,
              fontWeight: '500',
              fontSize: SWITTO_SIZES.smallText,
              paddingTop: 10,
            }}>
            Thu, May 20, 2022 at 10.30 am
          </Text>
        </View>
      </View>

      {/*orders*/}
      <View style={{marginTop: 80, paddingHorizontal: 20}}>
        <FlatList
          data={[1]}
          renderItem={() => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: COLORS.white,
                  paddingVertical: 10,
                }}>
                <CheckBox
                  checked={true}
                  checkedColor={COLORS.textOrange}
                  size={20}
                />
                <View>
                  <Text
                    style={{
                      color: COLORS.textBlack,
                      fontWeight: '400',
                      fontSize: SWITTO_SIZES.fontSize,
                    }}>
                    4 Chicken Wings
                  </Text>
                  <Text
                    style={{
                      color: COLORS.textOrange,
                      fontWeight: '500',
                      fontSize: SWITTO_SIZES.fontSize,
                    }}>
                    CHF 20.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    right: 0,
                    position: 'absolute',
                    paddingRight: 20,
                  }}>
                  <Icon
                    name={'close'}
                    size={'extra-small'}
                    IconType={'Ionicons'}
                    color={COLORS.textBlack}
                  />
                  <Text
                    style={{
                      color: COLORS.textBlack,
                      fontWeight: '400',
                      fontSize: SWITTO_SIZES.fontSize,
                    }}>
                    1
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: COLORS.whitePure,
          width: DEVICE.width,
          height: 120,
          paddingTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '600',
              fontSize: SWITTO_SIZES.titleSize,
            }}>
            Invoice Amount
          </Text>
          <Text
            style={{
              color: COLORS.textOrange,
              fontWeight: '800',
              fontSize: SWITTO_SIZES.fontSize,
            }}>
            CHF 20.00
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.textOrange,
            borderRadius: 8,
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              paddingVertical: 10,
              color: COLORS.whitePure,
              fontWeight: '500',
            }}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PickUpConfirmationScreen;

const styles = StyleSheet.create({});
