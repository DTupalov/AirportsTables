//@flow
import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import type { TProps } from '../types';

export default function Depart(props: TProps) {
  return (
    <Svg height={props.heigth} width={props.width}>
      <G
        transform={'translate(-.5 -.5)'}
        stroke={props.color}
        fill={'none'}
        fillRule={'evenodd'}
        opacity={props.opacity}
      >
        <Path
          d={
            'M9.76222749,13.6429569 L27.6669867,13.6429569 C27.6669867,13.6429569 30.7808578,14.0702825 30.00239,11.9336546 C29.2239222,9.79702668 25.7208172,8.94237552 25.7208172,8.94237552 L19.8673603,8.94237552 L15.6007359,3.81446854 C15.6007359,3.81446854 15.211502,2.95981738 14.0438003,2.5324918 C12.8760986,2.10516622 10.5406953,1.67784063 10.5406953,1.67784063 L14.4330342,8.94237552 L7.03759022,8.94237552 C7.03759022,8.94237552 5.99221432,6.24585702 5.48065464,5.52377087 C4.96909496,4.80168472 1.97754958,4.24179412 1.97754958,4.24179412 L3.53448516,10.6516778 C3.53448516,10.6516778 3.92371906,13.6429569 6.25912243,13.6429569 L9.76222749,13.6429569 Z'
          }
          transform={'rotate(-15 16.052 7.678)'}
        />
        <Path
          d={'M6.16079295,23.5 L20.2356828,23.5'}
          strokeLinecap={'square'}
        />
      </G>
    </Svg>
  );
}

Depart.defaultProps = {
  width: 32,
  heigth: 25,
  color: '#000000',
  opacity: 1,
};
