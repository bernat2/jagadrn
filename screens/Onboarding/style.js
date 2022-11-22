import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  logoView: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    alignItems: 'center',
  },
  imageLogo: {
    width: 45,
    height: 45,
  },
  logoText: {
    fontSize: 30,
    fontWeight: '300',
  },
  dotActiveStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3b186e',
  },
  dotInactiveStyle: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#737373',
  },
});

export default styles;
