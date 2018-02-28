import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import {
  CalendarIcon,
  ArrivedIcon,
  DepartIcon,
  EyeIcon,
  CloseIcon,
  AirplaneIcon,
  MenuIcon,
} from './index';
// import CalendarIcon from './Calendar';

storiesOf('Icons', module)
  .addDecorator(storyFn => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {storyFn()}
    </View>
  ))
  .add('Calendar', () => <CalendarIcon />)
  .add('Arrived', () => <ArrivedIcon />)
  .add('Depart', () => <DepartIcon />)
  .add('Eye', () => <EyeIcon />)
  .add('Close', () => <CloseIcon />)
  .add('Airplane', () => <AirplaneIcon />)
  .add('Menu', () => <MenuIcon />);
