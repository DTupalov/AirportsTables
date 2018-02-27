//@flow

import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Alert,
  DatePickerAndroid,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import style from './style';

type TProps = {
  onChange: (event: Object) => void,
  onDatePick: (date: Object) => void,
};

export default function SearchBar(props: TProps) {
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          underlineColorAndroid={'transparent'}
          placeholderTextColor={'#9b9b9b'}
          autoCorrect={false}
          caretHidden={true}
          autoCapitalize={'none'}
          placeholder={'Номер рейса или направление'}
        />
      </View>
      <View style={style.iconContainer}>
        <TouchableWithoutFeedback
          onPress={async () => {
            const date = await DatePickerAndroid.open({
              date: new Date(),
              minDate: new Date(2018, 1, 25),
              maxDate: new Date(2018, 1, 27),
            });
            props.onDatePick(date);
          }}
        >
          <Icon name={'calendar'} size={20} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
