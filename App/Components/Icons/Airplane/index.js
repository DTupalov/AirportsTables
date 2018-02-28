//@flow
import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { TProps } from '../types';

export default function Airplane(props: TProps) {
  return (
    <Svg height={props.heigth} width={props.width}>
      <Path
        d={
          'M22.5,16.8 L22.5,14.4 L13.0263158,8.4 L13.0263158,1.8 C13.0263158,0.804 12.2328947,0 11.25,0 C10.2671053,0 9.47368421,0.804 9.47368421,1.8 L9.47368421,8.4 L0,14.4 L0,16.8 L9.47368421,13.8 L9.47368421,20.4 L7.10526316,22.2 L7.10526316,24 L11.25,22.8 L15.3947368,24 L15.3947368,22.2 L13.0263158,20.4 L13.0263158,13.8 L22.5,16.8 Z'
        }
        transform={'rotate(90 12 12)'}
        fill={props.color}
        opacity={props.opacity}
      />
    </Svg>
  );
}

Airplane.defaultProps = {
  width: 24,
  heigth: 23,
  color: '#000000',
  opacity: 1,
};
