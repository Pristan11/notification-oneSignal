import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as React from 'react';
import {View} from 'react-native';
import {COLORS} from '../utils/theme';
import AndDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

type IconType = {
  name: string;
  size?:
    | 'small'
    | 'medium'
    | 'large'
    | 'extra-large'
    | 'extra-small'
    | 'icon-size'
    | 'intermediate-small';
  onPress?: () => void;
  style?: any;
  color?: string;
  IconType?: 'Material' | 'AndDesign' | 'Ionicons';
};

export const Icon = (props: IconType) => {
  const {name, size, onPress, style, color, IconType} = props;

  return (
    <View>
      {!IconType && (
        <MaterialCommunityIcons
          onPress={onPress}
          style={style}
          color={color ? color : COLORS.white}
          name={name}
          size={
            size == 'small'
              ? 20
              : size == 'medium'
              ? 30
              : size == 'large'
              ? 40
              : size == 'extra-large'
              ? 70
              : size == 'extra-small'
              ? 12
              : size == 'icon-size'
              ? 25
              : size == 'intermediate-small'
              ? 16
              : 30
          }
        />
      )}
      {IconType == 'AndDesign' && (
        <AndDesignIcon
          onPress={onPress}
          style={style}
          color={color ? color : COLORS.white}
          name={name}
          size={
            size == 'small'
              ? 20
              : size == 'medium'
              ? 30
              : size == 'large'
              ? 40
              : size == 'extra-large'
              ? 70
              : size == 'extra-small'
              ? 12
              : size == 'icon-size'
              ? 25
              : size == 'intermediate-small'
              ? 16
              : 30
          }
        />
      )}
      {IconType == 'Ionicons' && (
        <Ionicons
          onPress={onPress}
          style={style}
          color={color ? color : COLORS.white}
          name={name}
          size={
            size == 'small'
              ? 20
              : size == 'medium'
              ? 30
              : size == 'large'
              ? 40
              : size == 'extra-large'
              ? 70
              : size == 'extra-small'
              ? 12
              : size == 'icon-size'
              ? 25
              : size == 'intermediate-small'
              ? 16
              : 30
          }
        />
      )}
    </View>
  );
};
