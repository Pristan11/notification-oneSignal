import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {COLORS} from '../utils/theme';
import {Icon} from '../components/Icon';
import { DEVICE, SWITTO_SIZES } from "../utils/constants";
import Divider from 'react-native-elements/dist/divider/Divider';
import {ScreenProp} from '../../App';
import SwipeButton from 'rn-swipe-button';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import set = Reflect.set;
import { NavigationRouteContext } from "@react-navigation/native";
const OrderDetail = ({navigation}: ScreenProp) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.whitePure}}>
      {/*header*/}
      <Header navigation={navigation} />
      <ScrollView>
      {/*details*/}
      <Deatils />
        <Dialog
          visible={showModal}
          onTouchOutside={() => {
          setShowModal(false)
          }}
        >
          <DialogContent style={{ backgroundColor: COLORS.whitePure, width: DEVICE.width*0.9}}>
              <View
                style={{
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  width: '100%'
                }}>
                <Text
                  style={{
                    fontSize: SWITTO_SIZES.fontSize,
                    fontWeight: '300',
                    color: COLORS.textBlack,
                  }}>
                  Delivery location:
                </Text>
                <Text
                  style={{
                    fontSize: SWITTO_SIZES.titleSize,
                    fontWeight: '500',
                    color: COLORS.textBlack,
                    marginTop: 5,
                  }}>
                  Vijay Kumar
                </Text>

                <View
                  style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                  <Text
                    style={{
                      fontSize: SWITTO_SIZES.fontSize,
                      color: COLORS.textBlack,
                      fontWeight: '400',
                      marginLeft: 5,
                    }}>
                    {' '}
                    Friedenstrasse 2 , 6004 Luzern.
                  </Text>
                </View>
                <View>
                  <Divider width={0.5} color={COLORS.desGray} style={{marginTop: 15}} />
                </View>

                <View
                  style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, backgroundColor: COLORS.backgroundLightGray, paddingVertical: 5, paddingHorizontal: 0}}>
                  <Text
                    style={{
                      fontSize: SWITTO_SIZES.fontSize,
                      color: COLORS.textBlack,
                      fontWeight: '300',
                      paddingHorizontal: 20,
                      paddingVertical: 5

                    }}>
                    Delivery Instructions Display here,    Delivery Instructions Display here
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={()=> setShowModal(false)}
                  style={{backgroundColor: COLORS.swipeButtonGreen, marginTop: 20, borderRadius: 3, justifyContent: "center", alignItems: "center"}}>
                  <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 15}}>
                  <Icon name={'navigate'} IconType={'Ionicons'} size={"small"} color={COLORS.whitePure} />
                  <Text style={{fontSize: SWITTO_SIZES.titleSize, color: COLORS.whitePure, fontWeight: '600', marginLeft: 5}}>Get direction</Text>
                  </View>
                </TouchableOpacity>
              </View>
          </DialogContent>
        </Dialog>
      {/*swipe button*/}
      <SliderButton onPress={()=> setShowModal(true)}/>
      {/*orders*/}
      <OrderPriceDetails />
      {/*customer Detail*/}
      <CustomerDetail />
      </ScrollView>
    </View>
  );
};
export default OrderDetail;

const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: COLORS.whitePure},
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  headerTitle: {
    color: COLORS.textBlack,
    fontWeight: '500',
    fontSize: SWITTO_SIZES.fontSize,
  },
  headerSubTitle: {
    color: COLORS.orderTitle,
    fontWeight: '400',
    fontSize: SWITTO_SIZES.smallText + 1,
    marginTop: 10,
  },
  rightView: {alignItems: 'flex-end'},
});

const Header = props => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
    }}>
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <Icon
        name={'arrow-back'}
        IconType={'Ionicons'}
        size={'medium'}
        color={COLORS.textBlack}
      />
    </TouchableOpacity>
    <Text
      style={{
        fontSize: SWITTO_SIZES.titleSize,
        color: COLORS.textBlack,
        fontWeight: '500',
        marginLeft: 80,
      }}>
      {' '}
      Order Details
    </Text>
  </View>
);

const Deatils = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.orderDetailRose,
        paddingTop: 10,
        display: 'flex',
      }}>
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Text
              style={{
                fontSize: SWITTO_SIZES.fontSize,
                color: COLORS.textBlack,
                fontWeight: '600',
              }}>
              Order ID
            </Text>
            <Text
              style={{
                fontSize: SWITTO_SIZES.fontSize,
                color: COLORS.desGray,
                fontWeight: '400',
                marginLeft: 5,
              }}>
              AK423
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Text
              style={{
                fontSize: SWITTO_SIZES.fontSize,
                color: COLORS.textBlack,
                fontWeight: '600',
              }}>
              Payment
            </Text>
            <Text
              style={{
                fontSize: SWITTO_SIZES.fontSize,
                color: COLORS.desGray,
                fontWeight: '400',
                marginLeft: 5,
              }}>
              COD
            </Text>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Divider width={0.5} color={COLORS.desGray} style={{marginTop: 10}} />
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Text
              style={{
                fontSize: SWITTO_SIZES.fontSize,
                color: COLORS.textBlack,
                fontWeight: '600',
              }}>
              Order Date
            </Text>
            <Text
              style={{
                fontSize: SWITTO_SIZES.fontSize,
                color: COLORS.desGray,
                fontWeight: '400',
                marginLeft: 5,
              }}>
              2022 may 26 / 11.00 H
            </Text>
          </View>
        </View>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <Divider width={0.5} color={COLORS.desGray} style={{marginTop: 10}} />
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Text
              style={{
                fontSize: SWITTO_SIZES.fontSize,
                color: COLORS.textBlack,
                fontWeight: '600',
              }}>
              Estimate Delivery
            </Text>
            <Text
              style={{
                fontSize: SWITTO_SIZES.fontSize,
                color: COLORS.desGray,
                fontWeight: '400',
                marginLeft: 5,
              }}>
              2022 may 26 / 11.40 H
            </Text>
          </View>
        </View>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <Divider width={0.5} color={COLORS.desGray} style={{marginTop: 10}} />
      </View>
    </View>
  );
};

const OrderItem = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: COLORS.backgroundLightGray,
          borderRadius: 8,
          paddingTop: 10,
          paddingBottom: 5,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: COLORS.orderCartFoodName,
              fontWeight: '500',
              fontSize: SWITTO_SIZES.titleSize,
            }}>
            Prawn fried rice
          </Text>
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '500',
              fontSize: SWITTO_SIZES.fontSize,
            }}>
            CHF 20.00
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'close'}
            IconType={'Ionicons'}
            size={'extra-small'}
            color={COLORS.textBlack}
          />
          <Text
            style={{
              fontSize: SWITTO_SIZES.fontSize,
              color: COLORS.textBlack,
              fontWeight: '400',
              marginLeft: 2,
            }}>
            1
          </Text>
        </View>
        <View
          style={{
            backgroundColor: COLORS.whitePure,
            borderRadius: 8,
            paddingHorizontal: 20,
            paddingVertical: 5,
            marginBottom: 5,
            marginTop: 5,
          }}>
          <Text
            style={{
              color: COLORS.orderTitle,
              fontWeight: '700',
              fontSize: SWITTO_SIZES.smallText,
            }}>
            Choose of drink
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: COLORS.orderTitle,
                fontWeight: '400',
                fontSize: SWITTO_SIZES.smallText,
              }}>
              Water bottle
            </Text>
            <Text
              style={{
                color: COLORS.orderTitle,
                fontWeight: '500',
                fontSize: SWITTO_SIZES.smallText,
              }}>
              {' '}
              +{' '}
            </Text>
            <Text
              style={{
                color: COLORS.orderTitle,
                fontWeight: '700',
                fontSize: SWITTO_SIZES.smallText,
              }}>
              CHF 5.00{' '}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const OrderPriceDetails = () => {
  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
      <View
        style={{
          borderRadius: 8,
          backgroundColor: COLORS.backgroundLightGray,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
          marginTop: 10,
        }}>
        <Text
          style={{fontSize: 25, fontWeight: '400', color: COLORS.textBlack}}>
          CHF 105.00
        </Text>
        <Text
          style={{
            fontSize: SWITTO_SIZES.fontSize,
            fontWeight: '500',
            color: COLORS.textBlack,
          }}>
          Indian Restaurant koththu
        </Text>
        <Text
          style={{
            fontSize: SWITTO_SIZES.fontSize,
            fontWeight: '300',
            color: COLORS.textBlack,
            marginTop: 5,
          }}>
          Friedenstrasse 2 , 6004 Luzern.
        </Text>

        <Text
          style={{
            fontSize: SWITTO_SIZES.fontSize,
            fontWeight: '500',
            color: COLORS.textBlack,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 8,
            backgroundColor: COLORS.backgroundYellow,
            marginTop: 15,
          }}>
          Food is Preparing Now
        </Text>

        <Text
          style={{
            fontSize: SWITTO_SIZES.fontSize,
            fontWeight: '300',
            color: COLORS.textBlack,
            marginTop: 10,
          }}>
          Estimate pickup time : 11:20H
        </Text>
      </View>

      <OrderItem />
      <OrderItem />
    </View>
  );
};

const CustomerDetail = () => {
  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
      <View
        style={{
          backgroundColor: COLORS.backgroundGrayDark,
          borderRadius: 8,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Text
          style={{
            fontSize: SWITTO_SIZES.fontSize,
            fontWeight: '300',
            color: COLORS.textBlack,
          }}>
          Delivery
        </Text>
        <Text
          style={{
            fontSize: SWITTO_SIZES.titleSize,
            fontWeight: '500',
            color: COLORS.textBlack,
            marginTop: 5,
          }}>
          Vijay Kumar
        </Text>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Icon
            name={'location'}
            IconType={'Ionicons'}
            size={'intermediate-small'}
            color={COLORS.textBlack}
          />
          <Text
            style={{
              fontSize: SWITTO_SIZES.fontSize,
              color: COLORS.textBlack,
              fontWeight: '600',
              marginLeft: 5,
            }}>
            {' '}
            Friedenstrasse 2 , 6004 Luzern.
          </Text>
        </View>
        <View>
          <Divider width={0.5} color={COLORS.desGray} style={{marginTop: 15}} />
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Icon
            name={'bicycle'}
            IconType={'Ionicons'}
            size={'intermediate-small'}
            color={COLORS.textBlack}
          />
          <Text
            style={{
              fontSize: SWITTO_SIZES.fontSize,
              color: COLORS.textBlack,
              fontWeight: '300',
              marginLeft: 5,
            }}>
            Delivery Instructions Display here
          </Text>
        </View>
      </View>
    </View>
  );
};



const ForwardButton = () => {
  return(
    <View>
      <Icon name={'arrow-forward'} color={COLORS.whitePure} IconType={'Ionicons'} size={'small'}/>
    </View>
  );
}

type SliderButtonProps  = {
  onPress: ()=> void;
}
const SliderButton  = ({onPress}: SliderButtonProps) => {
  const [disableCBButton, setDisableCBButton] = useState(false)
  const defaultStatusMessage = 'swipe status appears here';
  const [swipeStatusMessage, setSwipeStatusMessage] = useState(
    defaultStatusMessage,
  );
  const updateSwipeStatusMessage = (message) => setSwipeStatusMessage(message);

  return   <View style={{marginHorizontal: 20, marginTop: 20}}>
    <SwipeButton
      containerStyles={{borderRadius: 8, backgroundColor: COLORS.red, overflow: "hidden"}}
      height={50}
      onSwipeFail={() => updateSwipeStatusMessage('Incomplete swipe!')}
      onSwipeStart={() => updateSwipeStatusMessage('Swipe started!')}
      onSwipeSuccess={() => {
        updateSwipeStatusMessage("Submitted successfully!");
        onPress();
      }
      }
      railBackgroundColor={COLORS.swipeButtonGreen}
      railStyles={{borderRadius: 8, backgroundColor: COLORS.swipeButtonGreen}}
      thumbIconComponent={ForwardButton}
      thumbIconBackgroundColor={COLORS.swipeSliderButtonGreen}
      // thumbIconImageSource={<Icon name={'arrow-back'} color={COLORS.textBlack} IconType={'Ionicons'} size={'small'}/> }
      thumbIconStyles={{borderRadius: 8, backgroundColor: 'red'}}
      thumbIconWidth={60}
      title="Delivery Start"
      railFillBackgroundColor={COLORS.swipeSliderButtonGreen}
    />
  </View>
}
