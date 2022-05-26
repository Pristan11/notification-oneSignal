import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Icon} from './Icon';

type IconLabelType = {
  viewStyles?: StyleProp<ViewStyle>;
  iconStyles?: StyleProp<ViewStyle | TextStyle>;
  titleStyles?: StyleProp<TextStyle>;
  title: string;
  icon: string;
  IconType?: 'Material' | 'AndDesign' | 'Ionicons' | null;
  iconSize?: 'small' | 'medium' | 'large' | 'extra-large' | 'extra-small';
  onPress?: () => void;
  IconPress?: () => void;
};
const IconLabelCard = ({
  viewStyles,
  iconStyles,
  titleStyles,
  title,
  icon,
  IconType,
  iconSize,
  onPress,
  IconPress,
}: IconLabelType) => {
  return (
    <TouchableOpacity
      style={[
        viewStyles,
        {flexDirection: 'row', alignItems: 'center', paddingLeft: 20},
      ]}
      onPress={onPress}>
      <Icon
        name={icon}
        IconType={IconType}
        style={[iconStyles]}
        size={iconSize ? iconSize : 'small'}
        onPress={IconPress}
      />
      <Text style={[titleStyles, {flex: 1, paddingLeft: 10}]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default IconLabelCard;

const styles = StyleSheet.create({});
