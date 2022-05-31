import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import {COLORS} from '../utils/theme';
import { SWITTO_SIZES } from "../utils/constants";
import { Divider } from "react-native-elements";
import { Icon } from "../components/Icon";

const OrderHistory = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.cardBackground, paddingHorizontal: 20}}>
     <DeliveredOrder/>
     <DeliveredOrder/>
    </View>
  );
};
export default OrderHistory;

const styles = StyleSheet.create({

});


const DeliveredOrder = () => (
  <View
    style={{
      borderRadius: 15,
      backgroundColor: COLORS.whitePure,
      marginTop: 10,
      paddingBottom: 20,
    }}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <Text style={{color: COLORS.textBlack, fontWeight: '500', flex: 1}}>
        Id: DF980
      </Text>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: COLORS.desGray,
          borderRadius: 25,
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection: "row", justifyContent: "center"
        }}>
        <Icon name={'checkmark-outline'} color={COLORS.whitePure} IconType={'Ionicons'} size={'small'} style={{position: 'absolute', right: 10, top: -10}}/>
        <Text
          style={{
            color: COLORS.whitePure,
            fontSize: SWITTO_SIZES.fontSize,
            paddingHorizontal: 5,
          }}>
          Delivered
        </Text>
      </TouchableOpacity>
    </View>
    <View style={{paddingHorizontal: 20, marginTop: 10}}>
      <Divider width={0.5} color={COLORS.textBlack} />
    </View>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingVertical: 5,
        marginTop: 5,
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name={'person'}
          IconType={'Ionicons'}
          color={COLORS.descriptionText}
          size={'extra-small'}
        />
        <Text
          style={{
            color: COLORS.textBlack,
            fontWeight: '400',
            fontSize: SWITTO_SIZES.fontSize,
            paddingLeft: 10,
          }}>
          Pavithra rathudan
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: COLORS.textBlack,
            fontWeight: '400',
            fontSize: SWITTO_SIZES.fontSize,
            paddingLeft: 10,
          }}>
         May 25 -  9.50H
        </Text>
      </View>
    </View>

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingVertical: 5,
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name={'bicycle'}
          IconType={'Ionicons'}
          color={COLORS.descriptionText}
          size={'extra-small'}
        />
        <Text
          style={{
            color: COLORS.textBlack,
            fontWeight: '400',
            fontSize: SWITTO_SIZES.fontSize,
            paddingLeft: 10,
          }}>
          Delivery
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: COLORS.textBlack,
            fontWeight: '400',
            fontSize: SWITTO_SIZES.fontSize,
            paddingLeft: 10,
          }}>
          25 min
        </Text>
      </View>
    </View>


    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingVertical: 5,
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name={'card'}
          IconType={'Ionicons'}
          color={COLORS.descriptionText}
          size={'extra-small'}
        />
        <Text
          style={{
            color: COLORS.textBlack,
            fontWeight: '400',
            fontSize: SWITTO_SIZES.fontSize,
            paddingLeft: 10,
          }}>
          Credit Card
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: COLORS.textBlack,
            fontWeight: '400',
            fontSize: SWITTO_SIZES.fontSize,
            paddingLeft: 10,
          }}>
          CHF 85.00
        </Text>
      </View>
    </View>
  </View>
);
