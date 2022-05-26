import {StyleSheet, Text, View, BackHandler, Image} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../utils/theme';
import {FONTS} from '../utils/constants';
import CommonButton from '../components/CommonButton';

const SuccessScreen = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        console.log('presss hardware')
        return true;
      },
    );
    return backHandler.remove();
  },[]);
  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/iconsImages/done.png')}
          style={styles.image}
        />
        {/*<Text style={styles.congText}>Congratulation!</Text>*/}
        {/*<Text style={styles.messageText}>*/}
        {/*  Order has been created Successfully !*/}
        {/*</Text>*/}
        <Text style={styles.messageText}>Payment was Successfully made!</Text>
      </View>
      <CommonButton
        viewStyles={styles.buttonView}
        textStyles={styles.title}
        title="Done"
      />
    </View>
  );
};
export default SuccessScreen;

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 17,
    paddingVertical: 10,
  },
  buttonView: {backgroundColor: COLORS.orange, borderRadius: 12},
  mainView: {backgroundColor: COLORS.white, paddingHorizontal: 20, flex: 1},
  imageView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  image: {width: 200, height: 200},
  congText: {...FONTS.h1, color: COLORS.black},
  messageText: {...FONTS.body3, color: COLORS.black, marginTop: 20},
});
