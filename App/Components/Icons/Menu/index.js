//@flow
import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import type { TProps } from '../types';

export default function Menu(props: TProps) {
  return (
    <Svg height={props.heigth} width={props.width}>
      <G
        stroke={props.color}
        fill={'none'}
        fillRule={'evenodd'}
        opacity={props.opacity}
      >
        <Path d={'M0 8L20 8M0 15L20 15M0 1L20 1'} />
      </G>
    </Svg>
  );
}

Menu.defaultProps = {
  width: 20,
  heigth: 16,
  color: '#000000',
  opacity: 1,
};
