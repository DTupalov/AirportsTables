//@flow
import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import type { TProps } from '../types';

export default function Close(props: TProps) {
  return (
    <Svg height={props.heigth} width={props.width}>
      <G
        stroke={props.color}
        fill={'none'}
        fillRule={'evenodd'}
        opacity={props.opacity}
        strokeLinecap={'round'}
        strokeWidth={2}
        transform={'translate(1 1)'}
      >
        <Path d={'M0,0 L14.7222729,14.7222729'} />
        <Path
          d={'M0,0 L14.7222729,14.7222729'}
          transform={'matrix(-1 0 0 1 14.722 0)'}
        />
      </G>
    </Svg>
  );
}

Close.defaultProps = {
  width: 17,
  heigth: 17,
  color: '#000000',
  opacity: 1,
};
