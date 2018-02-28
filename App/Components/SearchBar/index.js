//@flow

import React from 'react';
import { View, TextInput, Text, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import style from './style';

type TProps = {
  onChange: (event: Object) => void,
  onDatePick: (date: Date) => void,
};

type TState = {
  isCalendarOpen: boolean,
};

export default class SearchBar extends React.Component<TProps, TState> {
  state = { isCalendarOpen: false };

  openCalendar = () => {
    this.setState({
      isCalendarOpen: true,
    });
  };

  closeCalendar = () => {
    this.setState({
      isCalendarOpen: false,
    });
  };

  onDatePicked = (date: Date) => {
    this.closeCalendar();
    this.props.onDatePick(date);
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={'#9b9b9b'}
            autoCorrect={false}
            autoCapitalize={'none'}
            placeholder={'Номер рейса или направление'}
          />
        </View>
        <View style={style.iconContainer}>
          <TouchableWithoutFeedback onPress={this.openCalendar}>
            <Icon name={'calendar'} size={20} />
          </TouchableWithoutFeedback>
          <DateTimePicker
            isVisible={this.state.isCalendarOpen}
            onConfirm={this.onDatePicked}
            onCancel={this.closeCalendar}
          />
        </View>
      </View>
    );
  }
}
