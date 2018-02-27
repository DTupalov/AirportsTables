import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

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
    <SearchBar onDatePick={action('datePicked')} />
  </View>
));
