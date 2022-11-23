import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBorder: {
    flex: 1,
  },
  backButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#f2f2f2",
  },
  headerTitleContainer: {
    flex: 9,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 15,
    letterSpacing: 1.3,
  },
});

export default styles;