import React, {useState} from 'react';
import {
  Text,
  View,
} from 'react-native';
// styles only use in this file only
import styles from './styles';
// styles used can be called and reuse by other file
import globalStyle from '../../styles/index';
import InputPassword from '../InputPassword/InputPassword';

const CreateChangePassword = props => {
  const {
    password,
    setPassword,
    verifyPassword,
    setVerifyPassword,
    passwordErrorMessage,
    setPasswordErrorMessage,
    verifyPasswordErrorMessage,
    setVerifyPasswordErrorMessage,
    isPasswordMatch,
    setIsPasswordMatch,
  } = props;
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [verifyPasswordVisibility, setVerifyPasswordVisibility] =
    useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const formValidation = () => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    if (password.length < 6 || !regex.test(password)) {
      setPasswordErrorMessage(
        'Must be 6 or more characters and contain at least 1 number and 1 symbol',
      );
    }
    if (verifyPassword != '') {
      if (
        password != verifyPassword ||
        password.length < 6 ||
        verifyPassword.length < 6 ||
        !regex.test(password)
      ) {
        setVerifyPasswordErrorMessage('Your password do not match');
        setIsPasswordMatch(false);
      } else if (password == verifyPassword) {
        setVerifyPasswordErrorMessage('');
        setIsPasswordMatch(true);
      }
    }
  };

  React.useEffect(() => {
    formValidation();
  }, [password, verifyPassword]);

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

  const toggleVerifyPasswordVisibility = () => {
    if (rightIcon === 'eye') {
      // set visibility to true
      setRightIcon('eye-off');
      setVerifyPasswordVisibility(!verifyPasswordVisibility);
    } else if (rightIcon === 'eye-off') {
      // set visibility to false
      setRightIcon('eye');
      setVerifyPasswordVisibility(!verifyPasswordVisibility);
    }
  };

  return (
    <View>
      {/* Form */}
      <View style={styles.spaces}>
        <Text style={globalStyle.fontWeight500}>Create Password</Text>
        <View style={styles.inputForm}>
          <InputPassword
            password={password}
            setPassword={setPassword}
            placeholderText={'Your password'}
            style={styles.inputForm}
          />
        </View>
        {passwordErrorMessage.length > 0 && (
          <Text style={globalStyle.fontGray}>{passwordErrorMessage}</Text>
        )}
      </View>

      <View>
        <Text style={globalStyle.fontWeight500}>Verify Password</Text>
        <View
          style={isPasswordMatch ? styles.inputForm : styles.passwordWrongForm}>
          <InputPassword
            password={verifyPassword}
            setPassword={setVerifyPassword}
            placeholderText={'Verify your password'}
            style={
              isPasswordMatch ? styles.inputForm : styles.passwordWrongForm
            }
          />
        </View>
        {verifyPasswordErrorMessage.length > 0 && (
          <View>
            <Text style={globalStyle.fontRed}>
              {verifyPasswordErrorMessage}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default CreateChangePassword;
