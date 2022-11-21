import React from 'react';
import {ParallaxImage} from 'react-native-snap-carousel';
import {View, Text, Pressable, SafeAreaView, Image} from 'react-native';
import styles from './styles';

function CarouselItem({item, index}) {
  return (
    <View>
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

export default CarouselItem;
