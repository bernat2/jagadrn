import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  thisHeader: {
    flex: 1,
  },
  information: {
    flex: 15,
  },
  editText: {
    marginBottom: 10,
  },
  content: {
    flex: 25,
  },
  borderGray: {
    borderWidth: 2,
    borderColor: '#f2f2f2',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  choiceText: {
    width: '90%',
    alignSelf: 'center',
  },
  iconBorder: {
    borderWidth: 1,
    borderColor: '#f0f2f5',
    padding: 5,
    borderRadius: 15,
  },
  redInformation: {
    flex: 4,
  },
  redInfo: {
    backgroundColor: '#fce4e5',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  infoText: {
    textAlign: 'center',
  },
});

export default styles;
