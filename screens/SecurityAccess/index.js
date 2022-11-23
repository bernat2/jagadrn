import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// styles only use in this file only
import styles from './style';
// styles used can be called and reuse by other file
import globalStyle from '../../styles/index';
import Header from '../../component/Header/header';

const SecurityAccess = ({navigation}) => {
  React.useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <View style={globalStyle.container}>
        <Header navigation={navigation} title={'SECURITY ACCESS'} />
      </View>
      <View style={globalStyle.separator}></View>
      <View style={globalStyle.container}>
        <Text style={globalStyle.fontGray}>Edit Your Information</Text>
        <TouchableOpacity style={globalStyle.transparentBtnGray}>
          <Text>Change My PIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyle.transparentBtnGray}>
          <Text>Change My Password</Text>
        </TouchableOpacity>

        <View style={styles.redBox}>
          <Text>Please be sure to keep your information to yourself only</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecurityAccess;
