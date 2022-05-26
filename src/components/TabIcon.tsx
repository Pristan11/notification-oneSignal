import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as React from 'react';
import {View} from 'react-native';
import {COLORS} from '../utils/theme';
import AndDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

type IconType = {
  name: string;
  focused?: any;
  IconType?: 'Material' | 'AndDesign' | 'Ionicons';
};

export const TabIcon = ({name, focused, IconType}: IconType) => {
  return (
    <View >
      {!IconType && (
        <MaterialCommunityIcons
          color={focused ? COLORS.orange : COLORS.textBlack}
          name={name}
          size={24}
        />
      )}
      {IconType == 'AndDesign' && (
        <AndDesignIcon
          color={focused ? COLORS.orange : COLORS.textBlack}
          name={name}
          size={24}
        />
      )}
      {IconType == 'Ionicons' && (
        <Ionicons
          color={focused ? COLORS.orange : COLORS.textBlack}
          name={name}
          size={24}
        />
      )}
    </View>
  );
};
