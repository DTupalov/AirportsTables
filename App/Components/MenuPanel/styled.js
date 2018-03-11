//@flow
import { StyleSheet, Dimensions, Platform } from 'react-native';
import styled from 'styled-components';

export const MenuPanelContainer = styled.View`
  width: ${Dimensions.get('window').width};
  height: 100;
  background-color: ${props => props.theme.pallete.main || '#1086e8'};
`;

export const MenuPanelText = styled.Text`
  color: #fff;
  font-family: ${Platform.OS === 'ios' ? 'Roboto-Regular' : 'sans-serif'};
  font-size: 15;
`;

export const RowContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const LabelContainer = styled.View`
  flex: 0.5;
  align-items: center;
`;

export const ControlContainer = styled.View`
  flex: 0.5;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;
