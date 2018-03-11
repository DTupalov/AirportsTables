//@flow
import React from 'react';

import { Switch, ThemePicker } from '../Controls';
import {
  MenuPanelContainer,
  RowContainer,
  LabelContainer,
  MenuPanelText,
  ControlContainer,
} from './styled';

type ThemeEnum = 'blue' | 'green' | 'purple' | 'pink';

type TProps = {
  isNightModeOn: boolean,
  theme: ThemeEnum,
  onNightModeChange: (value: boolean) => void,
  onThemeChange: (theme: ThemeEnum) => void,
};

function MenuPanel(props: TProps) {
  return (
    <MenuPanelContainer>
      <RowContainer>
        <LabelContainer>
          <MenuPanelText>Ночной режим</MenuPanelText>
        </LabelContainer>
        <ControlContainer>
          <Switch
            value={props.isNightModeOn}
            onChange={props.onNightModeChange}
          />
        </ControlContainer>
      </RowContainer>
      <RowContainer>
        <LabelContainer>
          <MenuPanelText>Тема</MenuPanelText>
        </LabelContainer>
        <ControlContainer>
          <ThemePicker
            theme={props.theme}
            onThemeChange={props.onThemeChange}
          />
        </ControlContainer>
      </RowContainer>
    </MenuPanelContainer>
  );
}

export default MenuPanel;
