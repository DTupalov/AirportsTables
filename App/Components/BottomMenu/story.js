//@flow

import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import BottomMenu from './index';

storiesOf('BottomMenu', module)
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
  .add('default', () => (
    <BottomMenu
      onClick={action('clickMenuItem')}
      active={'arrived'}
      isMenuOpen={false}
    />
  ));
