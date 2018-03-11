//@flow
import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import style from './style';

export type ThemeEnum = 'blue' | 'green' | 'purple' | 'pink';

type TProps = {
  theme: ThemeEnum,
  onThemeChange: (theme: ThemeEnum) => void,
};

export const ThemeColorMap = {
  blue: '#1086e8',
  green: '#00bf63',
  purple: '#67217c',
  pink: '#f5519f',
};

export default function ThemePicker(props: TProps) {
  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={() => props.onThemeChange('blue')}>
        <View
          style={[
            style.colorBox,
            {
              backgroundColor: ThemeColorMap.blue,
              opacity: props.theme === 'blue' ? 0.5 : 1,
            },
          ]}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => props.onThemeChange('green')}>
        <View
          style={[
            style.colorBox,
            {
              backgroundColor: ThemeColorMap.green,
              opacity: props.theme === 'green' ? 0.5 : 1,
            },
          ]}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => props.onThemeChange('purple')}>
        <View
          style={[
            style.colorBox,
            {
              backgroundColor: ThemeColorMap.purple,
              opacity: props.theme === 'purple' ? 0.5 : 1,
            },
          ]}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => props.onThemeChange('pink')}>
        <View
          style={[
            style.colorBox,
            {
              backgroundColor: ThemeColorMap.pink,
              opacity: props.theme === 'pink' ? 0.5 : 1,
            },
          ]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
