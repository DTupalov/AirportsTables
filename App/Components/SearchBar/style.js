import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: 288,
    height: 40,
    paddingTop: 10,
    paddingLeft: 16,
    flexDirection: 'row',
    borderRadius: 2,
  },
  input: {
    backgroundColor: 'transparent',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Light' : 'sans-serif-thin',
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
    width: 185,
    height: 20,
    padding: 0,
  },
  inputContainer: {
    flex: 0.8,
  },
  iconContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
});
