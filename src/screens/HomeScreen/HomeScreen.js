
import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import MemberShip from './MemberShip';
import Services from '../Services/Services';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const imageData = [
  { id: '1', source: require('../../../assets/Images/Medicine.png') },
  { id: '2', source: require('../../../assets/Images/pateint.png') },
  { id: '3', source: require('../../../assets/Images/Wellness.png') },
  { id: '4', source: require('../../../assets/Images/Joining.png') },
  { id: '5', source: require('../../../assets/Images/PremiunBenifit.png') },
];

const newimageData = [
  {
    id: '1',
    source: require('../../../assets/Images/CareHome.png'),
    Description: 'Nursing Bureau Services',
  },
  {
    id: '2',
    source: require('../../../assets/Images/ambulance.png'),
    Description: 'Ambulance Services',
    
  },
  {
    id: '3',
    source: require('../../../assets/Images/medicalequipment.png'),
    Description: 'Medical Equipment',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.fullImageContainer}>
      <Image source={item.source} style={styles.fullImage} resizeMode="contain" />
    </View>
  );

  const newrenderItem = ({ item }) => (
    <View style={styles.serviceCard}>
      <View style={styles.serviceCardHeader}>
        <Image
          source={item.source}
          style={styles.serviceCardImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.serviceCardText}>{item.Description}</Text>

      <TouchableOpacity style={styles.activateButton}>
  <Text style={styles.activateButtonText}>Enroll</Text>
</TouchableOpacity>

    </View>
  );

  const login = () => {
    navigation.navigate('LoginScreen');
  };

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / (SCREEN_WIDTH * 0.9));
    setCurrentIndex(index);
  };
  const handleactivate =()=>{
                navigation.navigate('MemberShip')
  }
const services=()=>{

  navigation.navigate('Services',{ serviceList: newimageData })
}
  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {imageData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentIndex && styles.activeDot]}
          />
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/Images/Logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
 <View style={styles.card}>
          <TouchableOpacity>
            <Text style={styles.accountText}>Already have an account?</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={login} style={styles.payButtonWrapper}>
    <Image
      source={require('../../../assets/Images/button.png')}
      style={styles.payButtonImage}
    />
  </TouchableOpacity>
        
          <View style={styles.card1}>
            <View style={styles.cardHeader} />
            <Text style={styles.headerText}>Health ONE - Membership </Text>
            <Text style={styles.headerText1}>Care for Your Parents, at every Step </Text>

            <View style={styles.cardBody}>
              {/* <FlatList
                ref={flatListRef}
                data={imageData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
              />   */}

<FlatList
  ref={flatListRef}
  data={imageData}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  horizontal
  pagingEnabled          
  showsHorizontalScrollIndicator={false}
  onScroll={handleScroll}
  scrollEventThrottle={16}
  decelerationRate="fast" 
  snapToInterval={SCREEN_WIDTH} 
  snapToAlignment="center"
/>

         
              
              {renderDots()}
              <TouchableOpacity onPress={handleactivate}>
              <Image
                source={require('../../../assets/Images/Activate.png')}
                style={styles.activateImage}
              />
              </TouchableOpacity>
            </View>
          </View>

      
          <View style={styles.servicesHeader}>
            <TouchableOpacity>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={services}>
              <Text style={{ fontSize: 16, color: 'gray' }}>View More</Text>
            </TouchableOpacity>
          </View>

         
          <View style={styles.card2}>
            <FlatList
              data={newimageData}
              renderItem={newrenderItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10 }}
              
            />


          </View>
      
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: '#006241',
    alignItems: 'center',
    paddingTop: 10,
  },
  image: {
    width: 180,
    height: 55,
    marginBottom: 40,
  },
//   activateButton: {
//   borderWidth:1,
//     paddingVertical: 8,
//     paddingHorizontal: 24,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 65,
//     alignSelf: 'center',
//     width:'80%',
//     height:60,
//     justifyContent:'center',
//     borderColor:'#006241',
//      shadowColor: '#006241', 
//   // shadowOffset: { width: 0, height: 0 }, // No offset (glow around the button)
//   shadowOpacity: 0.8,
//   shadowRadius: 10, 
//     elevation: 10, 
//     backgroundColor: '#f4f5f7',  
//  },

activateButton: {
  paddingVertical: SCREEN_WIDTH < 350 ? 6 : 8,
  paddingHorizontal: 24,
  borderRadius: 5,
  alignItems: 'center',
  marginTop: 65,
  alignSelf: 'center',
  width: '80%',
  maxWidth: 400,
  height: 60,
  justifyContent: 'center',
  borderColor: '#006241',
  borderWidth: 1,
  shadowColor: '#006241',
  shadowOpacity: 0.8,
  shadowRadius: 10,
  elevation: 10,
  backgroundColor: '#f4f5f7',
},

  payButtonWrapper: {
      alignSelf: 'center',
  },
  
  // payButtonImage: {
  //   width: 400,
  //   height: 120,
  //   resizeMode: 'contain',
  // },
  
  payButtonImage: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 0.3,
    resizeMode: 'contain',
  },
  
  
  activateButtonText: {
    color: '#006241',
    fontSize: 20,
    fontWeight: '600',
   
  },
  
  card: {
    width: '100%',
    backgroundColor: '#f4f6f9',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 30,
    height: '100%',
  },
  card1: {
    width: '90%',
    height: 550,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    marginTop: 5,
  },
  cardHeader: {
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    marginLeft: 70,
    marginTop: 5,
  },
  headerText1: {
    color: 'white',
    fontSize: 14,
    position: 'absolute',
    marginLeft: 70,
    marginTop: 30,
  },
  cardBody: {
    flex: 2,
    backgroundColor: 'white',
    marginTop: 20,
  },
  // fullImageContainer: {
  //   width: SCREEN_WIDTH * 0.9,
  //   height: 300,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // fullImage: {
  //   width: '120%',
  //   height: '120%',
  //   borderRadius: 30,
    
  // },
  fullImageContainer: {
    width: SCREEN_WIDTH,
    height: 370,         
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#fff',
   
  },
  fullImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginBottom:40
  },
  
  
  
  accountText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: '#a5a7b6',
  },
  
activateImage: {
  marginTop: 19,
  alignSelf: 'center',  
  marginLeft: 0,  
  width: SCREEN_WIDTH * 0.8,  
  height: SCREEN_WIDTH * 0.25,  
  resizeMode: 'contain', 
},
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#1b9445',
  },
  servicesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '6%',
    width: '90%',
    alignSelf: 'center',
  },
  card2: {
    width: '100%',
    marginTop: 20,
    paddingBottom: 30,
  },
  serviceCard: {
    width: 330,
    height:350,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginRight: 15,
    overflow: 'hidden',
        shadowRadius: 5,
   
  },
  serviceCardHeader: {
    height: 200,
    width: '100%',
  },
  serviceCardImage: {
    width: '100%',
    height: '100%',
  },
  serviceCardText: {
    padding: 10,
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    position:'absolute',
    marginTop:200

  },
});

export default HomeScreen;

