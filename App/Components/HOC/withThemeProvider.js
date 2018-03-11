//@flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';

type ThemeEnum = 'blue' | 'green' | 'purple' | 'pink';

export default (WrappedComponent: React$ComponentType<*>) => {
  class AppThemeProvider extends React.Component<
    *,
    { theme: ThemeEnum, isNightModeOn: boolean }
  > {
    state = { theme: 'blue', isNightModeOn: false };

    onThemeChange = (theme: ThemeEnum) => {
      this.setState({ theme, isNightModeOn: false });
    };

    onNightModeChange = (isNightModeOn: boolean) => {
      this.setState({ isNightModeOn });
    };

    render() {
      return (
        <ThemeProvider
          theme={
            this.state.isNightModeOn
              ? themes.night
              : themes[this.state.theme] || themes.blue
          }
        >
          <WrappedComponent
            {...this.props}
            onThemeChange={this.onThemeChange}
            onNightModeChange={this.onNightModeChange}
            isNightModeOn={this.state.isNightModeOn}
          />
        </ThemeProvider>
      );
    }
  }

  return AppThemeProvider;
};
