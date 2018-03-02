//@flow

import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';

import BottomMenu from './index';

// Why setTimeout
// https://github.com/storybooks/storybook/issues/1192
setTimeout(() => {
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
    .add(
      'default',
      withState({ isMenuOpen: false, active: 'arrived' }, store => (
        <BottomMenu
          onClick={button => store.set({ active: button, isMenuOpen: false })}
          onMenuOpen={() => store.set({ isMenuOpen: true })}
          onMenuClose={() => store.set({ isMenuOpen: false })}
          {...store.state}
        />
      ))
    );
}, 500);
