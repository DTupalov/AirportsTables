//@flow
import React from 'react';
import {
  View,
  Text,
  Switch,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

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
        style={
          Platform.OS === 'ios'
            ? { backgroundColor: '#000', borderRadius: 17 }
            : null
        }
        tintColor={Platform.OS === 'ios' ? '#fff' : '#000'}
        onTintColor={Platform.OS === 'ios' ? '#fff' : '#fff'}
        thumbTintColor={Platform.OS === 'ios' ? '#e1e1e1' : '#fff'}
        onValueChange={props.onChange}
      />
    </View>
  );
}
