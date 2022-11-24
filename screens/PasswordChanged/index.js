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
import LinearGradient from 'react-native-linear-gradient';

const PasswordChanged = ({navigation}) => {
  React.useEffect(() => {}, []);

  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={{height: windowHeight}}>
        <View style={globalStyle.container}>
          <Header navigation={navigation} title={'CHANGE PASSWORD'} />
        </View>

        {/* flex 25*/}
        <View style={styles.bodyColor}>
          <View style={globalStyle.separator}></View>
          <View style={[globalStyle.container, globalStyle.flex1]}>
            {/* Flex 0.5 to get a space after the separator */}
            <View style={styles.spaces}></View>

            <View style={styles.gradient}>
              <LinearGradient
              // Colors for the gradient
                colors={['#f1fbff', '#eeecff']}
                style={[styles.gradientCard]}>
                {/* Lock Coin Image Here */}
                {/* <Image
                  source={require('../../images/Logogram.png')}
                  style={styles.cardImage}
                /> */}
                <Text
                  style={[
                    styles.cardTitle,
                    globalStyle.fontWeightBold,
                    globalStyle.fontPurple,
                  ]}>
                  Your Password Has Been Changed
                </Text>
                <Text style={[styles.cardDesc, globalStyle.fontDarkGray]}>
                  Thank you, please make sure you are not sharing your private
                  data with anyone
                </Text>
              </LinearGradient>
            </View>
            <View style={styles.info}>
              <View style={[globalStyle.separator, styles.infoLine]}></View>
              <View style={styles.helpInfo}>
                <Text style={[globalStyle.fontWeight500, globalStyle.fontGray]}>
                  Need Help?{' '}
                </Text>
                <Text style={[globalStyle.fontWeight600, globalStyle.fontRed]}>
                  Contact Us
                </Text>
              </View>
              <TouchableOpacity style={styles.borderGray}>
                <Text style={styles.visitText}>VISIT HOME</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PasswordChanged;
