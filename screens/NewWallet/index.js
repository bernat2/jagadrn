import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
// styles only use in this file only
import styles from './style';
// styles used can be called and reuse by other file
import globalStyle from '../../styles/index';
import CreateChangePassword from '../../component/Password/CreateChangePassword';
import Header from '../../component/Header';

const NewWallet = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [verifyPasswordErrorMessage, setVerifyPasswordErrorMessage] =
    useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  React.useEffect(() => {}, []);

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={globalStyle.container}>
        <Header navigation={navigation} title={"CREATE NEW PASSWORD"}/>

        {/* Progress Bar */}
        <View style={styles.progresBar}>
          <View style={styles.activeBorder}></View>
          <View style={styles.passiveBorder}></View>
          <View style={styles.passiveBorder}></View>
        </View>

        {/* Form */}
        <View style={styles.passwordForm}>
          {/* Calling component to create new password */}
          <CreateChangePassword
            password={password}
            setPassword={setPassword}
            verifyPassword={verifyPassword}
            setVerifyPassword={setVerifyPassword}
            passwordErrorMessage={passwordErrorMessage}
            setPasswordErrorMessage={setPasswordErrorMessage}
            verifyPasswordErrorMessage={verifyPasswordErrorMessage}
            setVerifyPasswordErrorMessage={setVerifyPasswordErrorMessage}
            isPasswordMatch={isPasswordMatch}
            setIsPasswordMatch={setIsPasswordMatch}
          />
        </View>

        <TouchableOpacity
          // onPress to next page, no need to check because has been cheked in CreateChangePassword. (Uncomment onPress={} to continue)
          // onPress={}
          style={
            isPasswordMatch && verifyPassword != ''
              ? [globalStyle.primaryButton, styles.nextBtn]
              : [globalStyle.disabledButton, styles.nextBtn]
          }
          disabled={!(isPasswordMatch && verifyPassword != '')}>
          <Text
            style={
              isPasswordMatch && verifyPassword != ''
                ? [globalStyle.fontWhite]
                : [globalStyle.fontDisabled]
            }>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewWallet;
