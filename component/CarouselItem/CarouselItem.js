import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import globalStyle from '../../styles/index'

function CarouselItem({item, index}) {
  return (
    // Create only 1 view to all elements
    <View>
      {/* Place Text after image view to fix text keep showing above the image */}
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.text}>
        <Text style={[styles.title, globalStyle.fontWeight600]}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

export default CarouselItem;
