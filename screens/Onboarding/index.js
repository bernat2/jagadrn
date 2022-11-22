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
// styles only use in this file only
import styles from './style';
// styles used can be called and reuse by other file
import globalStyle from '../../styles/index';

const Onboarding = ({navigation}) => {
  React.useEffect(() => {}, []);

  // Data needed for carousel
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
        <View style={globalStyle.separator}></View>
      </View>

      <View style={globalStyle.container}>
        {/* Carousel Here */}
        <Carousel
          ref={carouselRef}
          {...settings}
          onSnapToItem={index => setIndex(index)}
        />

        {/* If use pagination define here with the data */}
        <Pagination
          dotsLength={data.length}
          carouselRef={carouselRef}
          activeDotIndex={index}
          dotStyle={
            // Active dot style
            styles.dotActiveStyle
          }
          inactiveDotStyle={
            // Define styles for inactive dots here
            styles.dotInactiveStyle
          }
          tappableDots={true}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
          animatedDuration={0}
        />

        {/* Button */}
        <View>
          <TouchableOpacity style={globalStyle.primaryButton} onPress={() => navigation.navigate('CREATE NEW WALLET')}>
            <Text style={[globalStyle.fontWhite, globalStyle.fontWeight600]}>
              CREATE NEW WALLET
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyle.secondaryButton}>
            <Text style={[globalStyle.fontBlack, globalStyle.fontWeight600]}>
              I ALREADY HAVE A WALLET
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
