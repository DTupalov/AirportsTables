//@flow
import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';

import MenuPanel from './index';

setTimeout(() => {
  storiesOf('MenuPanel', module).add(
    'default',
    withState(
      {
        isNightModeOn: false,
        theme: 'blue',
      },
      store => (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MenuPanel
            {...store.state}
            onNightModeChange={isNightModeOn => store.set({ isNightModeOn })}
            onThemeChange={theme => store.set({ theme })}
          />
        </View>
      )
    )
  );
}, 0);
