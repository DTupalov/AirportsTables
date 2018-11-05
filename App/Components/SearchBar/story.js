import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import SearchBar from './index';

storiesOf('SearchBar', module).add('default', () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'gray',
    }}
  >
    <View style={{ width: '90%' }}>
      <SearchBar onDatePick={action('datePicked')} />
    </View>
  </View>
));
