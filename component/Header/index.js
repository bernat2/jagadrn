import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
// styles only use in this file only
import styles from './styles';
// styles used can be called and reuse by other file
import globalStyle from '../../styles/index';

const Header = ({navigation, title}) => {
  React.useEffect(() => {}, []);

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButtonContainer}>
            <Image
              source={require('../../images/icons/chevron_back.png')}
              style={styles.backButton}
            />
          </TouchableOpacity>

          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>

          {/* Giving the flex 1 so there will be 11 flex space. headerTitleContainer will have 9
          so it can be odd number and the text can be centered. Add 1 flex for each left and right */}
          <View style={{flex: 1}}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
