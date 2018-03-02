//@flow

import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: '#1086e8',
  },
  text: {
    color: '#fff',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'sans-serif',
    fontSize: 15,
  },
  rowContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  labelContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  controlContainer: {
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
