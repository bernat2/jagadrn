import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// styles only use in this file only
import styles from './styles';
// styles used can be called and reuse by other file
import globalStyle from '../../styles/index';

const InputPassword = props => {
  const {password, setPassword, placeholderText} = props;
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  React.useEffect(() => {}, []);

  const togglePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      // set visibility to true
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      // set visibility to false
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return (
    <View style={globalStyle.directionRow}>
      <TextInput
        style={styles.password}
        placeholder={placeholderText}
        secureTextEntry={passwordVisibility}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        {/* <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color="#232323"
              /> */}
        <Text>View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputPassword;
