import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  progresBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: 20,
  },
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
  passwordForm: {
    borderWidth: 2,
    borderColor: "#f2f2f2",
    borderRadius: 20,
    padding: 20,
    marginTop: 40
  },
  nextBtn: {
    marginTop:20,
  }
});

export default styles;
