//@flow
import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';

import { Switch, ThemePicker } from './index';

setTimeout(() => {
  storiesOf('Controls', module)
    .addDecorator(storyFn => (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e1e1e1',
        }}
      >
        {storyFn()}
      </View>
    ))
    .add(
      'Switch',
      withState({ value: false }, store => (
        <Switch {...store.state} onChange={value => store.set({ value })} />
      ))
    )
    .add(
      'ThemePicker',
      withState({ theme: 'blue' }, store => (
        <ThemePicker
          {...store.state}
          onThemeChange={theme => {
            store.set({ theme });
          }}
        />
      ))
    );
}, 0);
