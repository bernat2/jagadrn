import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// styles only use in this file only
import styles from './styles';
// styles used can be called and reuse by other file
import globalStyle from '../../styles/index';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';

const InputPassword = props => {
  const {password, setPassword, placeholderText} = props;
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [colors, setColors] = useState('');
  const [rightIcon, setRightIcon] = useState('eye');

  React.useEffect(() => {
    eyeColor();
  }, [password]);

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

  const eyeColor = () => {
    if (password != '') setColors('#550472');
    else if (password == '') setColors('#d6d6d6');
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
        <Icon name={rightIcon} size={18} color={colors} />
      </TouchableOpacity>
    </View>
  );
};

export default InputPassword;
