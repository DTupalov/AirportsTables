//@flow
import React from 'react';
import { View, Text } from 'react-native';

import { Switch, ThemePicker } from '../Controls';

import style from './style';

type ThemeEnum = 'blue' | 'green' | 'purple' | 'pink';

type TProps = {
  isNightModeOn: boolean,
  onNightModeChange: boolean,
  theme: ThemeEnum,
  onThemeChange: (theme: ThemeEnum) => void,
};

export default function MenuPanel(props: TProps) {
  return (
    <View style={style.container}>
      <View style={style.rowContainer}>
        <View style={style.labelContainer}>
          <Text style={style.text}>Ночной режим</Text>
        </View>
        <View style={style.controlContainer}>
          <Switch
            value={props.isNightModeOn}
            onChange={props.onNightModeChange}
          />
        </View>
      </View>
      <View style={style.rowContainer}>
        <View style={style.labelContainer}>
          <Text style={style.text}>Тема</Text>
        </View>
        <View style={style.controlContainer}>
          <ThemePicker
            theme={props.theme}
            onThemeChange={props.onThemeChange}
          />
        </View>
      </View>
    </View>
  );
}
