import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  activeBorder:{
    borderWidth: 5,
    color: "#bd13f9",
    borderColor: "#bd13f9",
    borderRadius: 25,
    width:"30%",
  },
  passiveBorder:{
    borderWidth: 5,
    color: "#f6ddfe",
    borderColor: "#f6ddfe",
    borderRadius: 25,
    width: "30%",
  },
  passwordWrongForm: {
    borderWidth: 2,
    borderColor: "#ec5352",
    backgroundColor: "#fef4cc",
    borderRadius: 8,
    flexDirection: 'row',
    height: 40,
    padding: 10,
    marginVertical: 12,
  },
  inputForm: {
    borderWidth: 2,
    borderColor: "#f2f2f2",
    borderRadius: 8,
    flexDirection: 'row',
    height: 40,
    padding: 10,
    marginVertical: 12,
  },
  password:{
    width: '90%',
  },
  nextBtn: {
    marginTop:20,
  }
});

export default styles;
