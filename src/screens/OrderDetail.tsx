import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mvs} from 'react-native-size-matters';
import {COLORS} from '../utils/theme';
import { Icon } from "../components/Icon";
import { SWITTO_SIZES } from "../utils/constants";

const OrderDetail = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.backgroundLightGray}}>
     <View style={{flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingVertical: 10}}>
       <Icon name={'arrow-back'} IconType={'Ionicons'} size={'medium'} color={COLORS.textBlack}/>
       <Text style={{fontSize: SWITTO_SIZES.titleSize, color: COLORS.textBlack, fontWeight: '500', marginLeft: 80}}> Order Details</Text>
     </View>
    </View>
  );
};
export default OrderDetail;

const styles = StyleSheet.create({

});

