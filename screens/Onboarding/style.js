import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logoView: {
    flexDirection: "row",
    justifyContent: "center",
    height: 60,
    alignItems: "center",
  },
  imageLogo: {
    width: 45,
    height: 45,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "300"
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
  container: {
    padding: 20
  },
  fontWhite:{
    color: "white"
  },
  fontBlack: {
    color: "black"
  },
  fontWeight600: {
    fontWeight: "600"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default styles;