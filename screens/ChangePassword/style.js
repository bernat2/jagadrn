import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pageInfo:{
    width: "65%",
    alignSelf: "center",
    margin:  30
  },
  pageTitle:{
    fontSize: 26,
    textAlign: "center",
    marginBottom: 5
  },
  pageDesc:{
    textAlign:"center",
    letterSpacing: 1.1,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 15,
    padding: 10,
    borderBottomWidth: 5,
    elevation: 5
  },
  inputForm: {
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 8,
    flexDirection: 'row',
    height: 40,
    padding: 10,
    marginVertical: 12,
  },
  password: {
    width: '90%',
  },
  changeButton: {
    width: '40%',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
});

export default styles;
