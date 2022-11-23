import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
// styles only use in this file only
import styles from './style';
// styles used can be called and reuse by other file
import globalStyle from '../../styles/index';
import Header from '../../component/Header';
import CreateChangePassword from '../../component/Password/CreateChangePassword';

const ChangePassword = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [verifyPasswordErrorMessage, setVerifyPasswordErrorMessage] =
    useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [oldPasswordVisibility, setOldPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const toggleOldPasswordVisibility = () => {
    if (rightIcon === 'eye') {
      // set visibility to true
      setRightIcon('eye-off');
      setOldPasswordVisibility(!oldPasswordVisibility);
    } else if (rightIcon === 'eye-off') {
      // set visibility to false
      setRightIcon('eye');
      setOldPasswordVisibility(!oldPasswordVisibility);
    }
  };

  React.useEffect(() => {}, []);

  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={{height: windowHeight}}>
        {/* flex 1 */}
        <View style={[globalStyle.container, styles.thisHeader]}>
          <Header navigation={navigation} title={'CHANGE PASSWORD'} />
        </View>


        {/* flex 25*/}
        <View style={{flex: 25, backgroundColor: "#fbfdff"}}>
        <View style={globalStyle.separator}></View>
          <View style={globalStyle.container}>
            <View style={styles.pageInfo}>
              <Text style={[styles.pageTitle, globalStyle.fontWeightBold]}>Enter Password</Text>
              <Text style={styles.pageDesc}>Fill your new password on the field bellow</Text>
            </View>
            <View style={styles.inputBox}>
              <Text>Enter Old Password</Text>
              <View style={styles.inputForm}>
                <TextInput
                  style={styles.password}
                  placeholder="Enter Old Password"
                  secureTextEntry={oldPasswordVisibility}
                  value={oldPassword}
                  onChangeText={setOldPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity onPress={toggleOldPasswordVisibility}>
                  {/* <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color="#232323"
                /> */}
                  <Text>View</Text>
                </TouchableOpacity>
              </View>

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
              <TouchableOpacity
                style={
                  isPasswordMatch && verifyPassword != ''
                    ? [globalStyle.primaryButton, styles.nextBtn, styles.changeButton]
                    : [globalStyle.disabledButton, styles.nextBtn, styles.changeButton]
                }
                disabled={!(isPasswordMatch && verifyPassword != '')}>
                <Text
                  style={
                    isPasswordMatch && verifyPassword != ''
                      ? [globalStyle.fontWhite]
                      : [globalStyle.fontDisabled]
                  }>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
