//@flow
import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';

import MenuPanel from './index';
import withThemeProvider from '../HOC/withThemeProvider';
import { withTheme } from 'styled-components';

const WrappedMenuPanel = withThemeProvider(
  withTheme(props => <MenuPanel {...props} theme={props.theme.type} />)
);

setTimeout(() => {
  storiesOf('MenuPanel', module).add('default', () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <WrappedMenuPanel />
    </View>
  ));
}, 500);
