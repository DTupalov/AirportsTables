//@flow

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'sans-serif',
    fontSize: 15,
  },
  labelContainer: {
    width: 50,
  },
});
