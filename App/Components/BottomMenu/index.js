//@flow

import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import {
  ArrivedIcon,
  DepartIcon,
  EyeIcon,
  MenuIcon,
  CloseIcon,
} from '../Icons';
import style from './style';

type TProps = {
  onClick: (button: 'arrived' | 'depart' | 'watch' | 'menu' | 'close') => void,
  active: 'arrived' | 'depart' | 'watch',
  isMenuOpen: boolean,
};

export default function BottomMenu(props: TProps) {
  return (
    <View style={style.container}>
      <View style={style.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => props.onClick('arrived')}>
          <View>
            <ArrivedIcon
              color={'#fff'}
              opacity={
                props.active === 'arrived' && !props.isMenuOpen ? 1 : 0.3
              }
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => props.onClick('depart')}>
          <View>
            <DepartIcon
              color={'#fff'}
              opacity={props.active === 'depart' && !props.isMenuOpen ? 1 : 0.3}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => props.onClick('watch')}>
          <View>
            <EyeIcon
              color={'#fff'}
              opacity={props.active === 'watch' && !props.isMenuOpen ? 1 : 0.3}
            />
          </View>
        </TouchableWithoutFeedback>
        {props.isMenuOpen ? (
          <TouchableWithoutFeedback onPress={() => props.onClick('close')}>
            <View>
              <CloseIcon color={'#fff'} opacity={1} />
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback onPress={() => props.onClick('menu')}>
            <View>
              <MenuIcon color={'#fff'} opacity={0.3} />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
}
