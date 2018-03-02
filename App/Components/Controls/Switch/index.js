//@flow
import React from 'react';
import { View, Text, Switch, TouchableWithoutFeedback } from 'react-native';

import style from './style';

type TProps = {
  value: boolean,
  onChange: (value: boolean) => void,
};

export default function LabeledSwitch(props: TProps) {
  return (
    <View style={style.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          props.onChange(!props.value);
        }}
      >
        <View style={style.labelContainer}>
          <Text style={style.text}>{props.value ? 'Вкл.' : 'Выкл.'}</Text>
        </View>
      </TouchableWithoutFeedback>

      <Switch
        value={props.value}
        tintColor={'#000'}
        onTintColor={'#fff'}
        thumbTintColor={'#fff'}
        onValueChange={props.onChange}
      />
    </View>
  );
}
