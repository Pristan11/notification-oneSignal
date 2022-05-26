import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mvs} from 'react-native-size-matters';
import {COLORS} from '../utils/theme';
import { SWITTO_SIZES } from "../utils/constants";
type CategoryProps = {
  index: number;
  length: number;
};
const CategorySkeleton = (props: CategoryProps) => {
  const {index, length} = props;
  return (
    <View style={[styles.mainView, {paddingLeft: index == 0? mvs(20): 10, paddingRight: index == length -1 ? 20 : 0}]}>
      <View style={styles.imageView}>
        <View style={styles.image} />
      </View>
      <View>
        <View style={styles.text}/>
      </View>
    </View>
  );
};
export default CategorySkeleton;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 8,
    width: '20%',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  imageView: {
    backgroundColor: COLORS.black,
    borderRadius: 8,
  },
  image: {
    height: mvs(40),
    width: mvs(70),
    borderRadius: 8,
  },
  text: {
    color: COLORS.black,
    fontSize: SWITTO_SIZES.smallText,
    fontWeight: '500',
    marginTop: 5
  },
});
