import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // marginTop: -100,
    textAlign: "center"
  },
  description:{
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 30,
    paddingTop: 10
  },
  text: {
    marginLeft: -30,
    marginRight: 30,
    marginTop: -100,
    marginBottom: 50,
    justifyContent: "center",
    alignContent: "center"
  },
  item: {
    marginTop: 25,
    width: '100%',
    height: screenWidth,
    alignItems: "center",
    marginLeft: 20,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});
export default styles;
