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
    padding: 20
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
    color: "#7d7778"
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