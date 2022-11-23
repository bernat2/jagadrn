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
  container: {
    padding: 20,
    paddingBottom: 8
  },
  transparentBtnGray: {
    borderWidth: 2,
    borderColor: "#f2f2f2",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
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
  fontDarkGray: {
    color: "#737070"
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