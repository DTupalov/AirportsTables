//@flow

import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { CalendarIcon } from '../Icons';
import {
  SearchContainer,
  InputContainer,
  TextInput,
  IconContainer,
} from './styled';

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
    console.log('openCalendar');
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
      <SearchContainer>
        <InputContainer>
          <TextInput
            underlineColorAndroid={'transparent'}
            placeholderTextColor={'#9b9b9b'}
            autoCorrect={false}
            autoCapitalize={'none'}
            placeholder={'Номер рейса или направление'}
          />
        </InputContainer>
        <IconContainer>
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
        </IconContainer>
      </SearchContainer>
    );
  }
}
