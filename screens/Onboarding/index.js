import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselItem from '../../component/CarouselItem/CarouselItem';
import styles from './style';

const Onboarding = ({navigation}) => {
  React.useEffect(() => {}, []);

  const {width: screenWidth} = Dimensions.get('window');

  const data = [
    {
      image: require('../../images/onboarding/vector1.png'),
      title: 'Invest for Future',
      description:
        'A sed ea maiores corporis est facere nemo officiis. Ut ea porro. Rerum quae animi consequatur blanditiis.',
    },
    {
      image: require('../../images/onboarding/vector2.png'),
      title: 'Triple Your Funds',
      description:
        'Dicta minus animi sunt neque iusto quis et eveniet iusto. Praesentium quos quia dolore qui rerum ut. Neque ipsa hic dolores.',
    },
    {
      image: require('../../images/onboarding/vector3.png'),
      title: 'Safe & Secure',
      description:
        'Dolor culpa doloribus. Quia nihil sed commodi. Ab non in itaque sit asperiores voluptatibus aut. Fugit dolor natus.',
    },
  ];

  const windowWidth = Dimensions.get('window').width + 20;
  const windowHeight = Dimensions.get('window').height;

  const settings = {
    sliderWidth: windowWidth,
    sliderHeight: windowHeight,
    itemWidth: windowWidth - 40,
    data: data,
    renderItem: CarouselItem,
  };

  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  return (
    <SafeAreaView>
      {/* Logo and Text */}
      <View>
        <View style={styles.logoView}>
          <Image
            source={require('../../images/Logogram.png')}
            style={styles.imageLogo}
          />
          <Text style={styles.logoText}>Garuda</Text>
        </View>
        <View style={styles.separator}></View>
      </View>

      <View style={styles.container}>
        {/* Carousel Here */}
        <Carousel
          ref={carouselRef}
          {...settings}
          onSnapToItem={index => setIndex(index)}
        />
        <Pagination
          dotsLength={data.length}
          carouselRef={carouselRef}
          activeDotIndex={index}
          containerStyle={{backgroundColor: 'white'}}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'black',
          }}
          inactiveDotStyle={
            {
              // Define styles for inactive dots here
            }
          }
          tappableDots={true}
        />

        {/* Button */}
        <View>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={[styles.fontWhite, styles.fontWeight600]}>
              CREATE NEW WALLET
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={[styles.fontBlack, styles.fontWeight600]}>
              I ALREADY HAVE A WALLET
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
