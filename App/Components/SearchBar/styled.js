//@flow

import { Platform } from 'react-native';
import styled from 'styled-components';

export const SearchContainer: React$ComponentType<*> = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: 40;
  padding-top: 10;
  padding-left: 16;
  flex-direction: row;
  border-radius: 2;
`;

export const InputContainer = styled.View`
  flex: 1;
`;

export const TextInput = styled.TextInput`
  background-color: transparent;
  font-family: ${Platform.OS === 'ios' ? 'Roboto-Light' : 'sans-serif-thin'};
  font-size: 12;
  text-align: center;
  color: #000000;
  width: 100%;
  height: 20;
  padding: 0;
  text-align: left;
`;

export const IconContainer = styled.View`
  align-items: flex-end;
  padding-right: 10;
  padding-left: 10;
`;
