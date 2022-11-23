import {Text, View, Image, TouchableOpacity} from 'react-native';
// styles used can be called and reuse by other file
import styles from './styles'
x
const Header = ({navigation, title}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBorder}>
        <Image
          source={require('../../images/icons/chevron_back.png')}
          style={styles.backButton}
        />
      </TouchableOpacity>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {/* This line help to center the text. With 11 flex, title have 9 flex 
      and other have 1 in left and right to make the title always center */}
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default Header;
