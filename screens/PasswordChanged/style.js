import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bodyColor: {
    flex: 25,
    backgroundColor: '#fbfdff',
  },
  gradientCard: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    paddingBottom: 40,
    borderRadius: 15,
  },
  cardImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  cardDesc: {
    textAlign: 'center',
    marginTop: 8,
  },
  info: {
    alignItems: 'center',
    position: 'relative',
    flex: 3,
  },
  infoLine: {
    marginTop: 9,
    width: '100%',
    position: 'absolute',
  },
  helpInfo: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
  borderGray: {
    borderWidth: 2,
    borderColor: '#505050',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },
  visitText: {
    fontSize: 16,
  },
});

export default styles;
