import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#f2f2f2",
  },
  backButtonContainer:{
    flex: 1
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  }, 
  headerTitle: {
    fontSize: 15,
    letterSpacing: 1.3
  },
  headerTitleContainer:{
    flex:9,
    alignItems: "center",
  }
});

export default styles;