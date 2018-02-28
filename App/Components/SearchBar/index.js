//@flow

import React from 'react';
import { View, TextInput, Text, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { CalendarIcon } from '../Icons';
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
            <View>
              <CalendarIcon opacity={0.3} />
            </View>
          </TouchableWithoutFeedback>
          <DateTimePicker
            isVisible={this.state.isCalendarOpen}
            onConfirm={this.onDatePicked}
            onCancel={this.closeCalendar}
            minimumDate={new Date(new Date().setDate(new Date().getDate() - 1))}
            maximumDate={new Date(new Date().setDate(new Date().getDate() + 1))}
          />
        </View>
      </View>
    );
  }
}
