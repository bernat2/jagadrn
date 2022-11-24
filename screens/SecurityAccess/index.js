import React, {useState} from 'react';
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
import Header from '../../component/Header';

const SecurityAccess = ({navigation}) => {
  React.useEffect(() => {}, []);

  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={{height: windowHeight}}>
        {/* flex 1 */}
        <View style={[globalStyle.container, styles.thisHeader]}>
          <Header navigation={navigation} title={'SECURITY ACCESS'} />
        </View>

        {/* flex 25*/}
        <View style={styles.content}>
          <View style={globalStyle.separator}></View>

          {/* add flex 1, to use flex inside this container.
          Need to refactor all the style since container need flex: 1 */}
          <View style={[globalStyle.container, globalStyle.flex1]}>

            {/*  flex 15 */}
            <View style={styles.information}>
              <Text style={[globalStyle.fontGray, styles.editText, globalStyle.fontWeight500]}>Edit Your Information</Text>
              <TouchableOpacity style={styles.borderGray}>
                <Text style={globalStyle.fontWeight600}>Change My PIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.borderGray} onPress={() => navigation.navigate("CHANGE PASSWORD")}>
                <Text style={globalStyle.fontWeight600}>Change My Password</Text>
              </TouchableOpacity>
            </View>

            {/* flex 4 */}
            <View style={styles.redInformation}>
              <View style={styles.redInfo}>
                <Text style={[styles.infoText, globalStyle.fontDarkGray]}>
                  Please be sure to keep your information to yourself only
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecurityAccess;
