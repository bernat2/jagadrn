import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#550472",
    alignItems:"center",
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  secondaryButton: {
    backgroundColor: "#ffffff",
    alignItems:"center",
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: "#e3e7ed",
    alignItems:"center",
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  backButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#f2f2f2",
  },
  container: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  }, 
  headerTitle: {
    fontSize: 15,
    paddingLeft: 50,
    letterSpacing: 1.3
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fontDisabled: {
    color: "#afb5c0"
  },
  fontWhite:{
    color: "white"
  },
  fontBlack: {
    color: "black"
  },
  fontGray: {
    color: "#797D85"
  },
  fontRed: {
    color: "red"
  },
  fontWeight600: {
    fontWeight: "600"
  },
  fontWeight500: {
    fontWeight: "500"
  },
});

export default styles;