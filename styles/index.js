import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  directionRow:{
    flexDirection: "row"
  },
  directionCol: {
    flexDirection: "column"
  },
  flex1:{
    flex: 1,
  },
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
  separator: {
    marginBottom: 8,
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
    color: "#6e707b"
  },
  fontRed: {
    color: "red"
  },
  fontPurple:{
    color: "#550472"
  },
  fontWeightBold:{
    fontWeight: "bold"
  },
  fontWeight700: {
    fontWeight: "700"
  },
  fontWeight600: {
    fontWeight: "600"
  },
  fontWeight500: {
    fontWeight: "500"
  },
});

export default styles;