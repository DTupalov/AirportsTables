//@flow
import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import type { TProps } from '../types';

export default function Arrived(props: TProps) {
  return (
    <Svg height={props.heigth} width={props.width}>
      <G
        transform={'translate(0 -1)'}
        stroke={props.color}
        fill={'none'}
        fillRule={'evenodd'}
        opacity={props.opacity}
      >
        <Path
          d={
            'M7.74325708,14.9651163 L25.5527484,14.9651163 C25.5527484,14.9651163 28.6500512,15.3924419 27.8757255,13.255814 C27.1013998,11.119186 23.6169341,10.2645349 23.6169341,10.2645349 L17.7946224,10.2645349 L13.5506999,5.13662791 C13.5506999,5.13662791 13.163537,4.28197674 12.0020485,3.85465116 C10.8405599,3.42732558 8.51758279,3 8.51758279,3 L12.3892113,10.2645349 L5.0331171,10.2645349 C5.0331171,10.2645349 3.99330345,7.56801638 3.48446569,6.84593023 C2.97562792,6.12384408 0,5.56395349 0,5.56395349 L1.54865142,11.9738372 C1.54865142,11.9738372 1.93581427,14.9651163 4.2587914,14.9651163 L7.74325708,14.9651163 Z'
          }
          transform={'rotate(15 14 9)'}
        />
        <Path d={'M13.5,22.8715082 L28.1929531,22.8715082'} />
      </G>
    </Svg>
  );
}

Arrived.defaultProps = {
  width: 29,
  heigth: 23,
  color: '#000000',
  opacity: 1,
};
