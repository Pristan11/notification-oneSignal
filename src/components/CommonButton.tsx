import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

type buttonType = {
  viewStyles: StyleProp<ViewStyle>;
  textStyles: StyleProp<TextStyle>;
  title: string;
  onPress?: () => void;
};
const CommonButton = ({viewStyles, textStyles, title, onPress}: buttonType) => {
  return (
    <TouchableOpacity style={[viewStyles]} onPress={onPress}>
      <Text style={[textStyles, {textAlign: 'center'}]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CommonButton;

const styles = StyleSheet.create({});
