import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
              <TouchableOpacity style={[styles.borderGray, globalStyle.directionRow]}>
                <Text style={[globalStyle.fontWeight600, styles.choiceText]}>Change My PIN</Text>
                <Icon name={'create'} size={18} color={"#0728e7"} style={styles.iconBorder}/>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.borderGray, globalStyle.directionRow]} onPress={() => navigation.navigate("CHANGE PASSWORD")}>
                <Text style={[globalStyle.fontWeight600, styles.choiceText]}>Change My Password</Text>
                <Icon name={'create'} size={18} color={"#0728e7"} style={styles.iconBorder}/>
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
