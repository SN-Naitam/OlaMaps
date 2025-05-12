
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import HomeScreen from './HomeScreen';
import PaymentSucces from '../PaymentScreen/PaymentSucces';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const imageData = [
  {
    id: '1',
    source: require('../../../assets/Images/services.png'),
    Description: '99',
    Text: 'Monthly',
  },
];

const data = [
  {
    id: '1',
    source1: require('../../../assets/Images/check.png'),
    title: 'Medicines & Tests',
  },
  {
    id: '2',
    source1: require('../../../assets/Images/check.png'),
    title: 'Quality Care at Home',
  },
  {
    id: '3',
    source1: require('../../../assets/Images/check.png'),
    title: 'Wellness & Mobility',
  },
  {
    id: '4',
    source1: require('../../../assets/Images/check.png'),
    title: 'Premium Benefits Coming Soon',
  },
  {
    id: '5',
    source1: require('../../../assets/Images/check.png'),
    title: 'Free ₹100 Pathlab Vouchers',
  },
];

const MemberShip = () => {
  const navigation = useNavigation();

  const back=()=>{
    navigation.navigate('HomeScreen')
  }


  const PaymentSuccess=()=>{
    navigation.navigate('PaymentSucces')
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/Images/Logo.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.card}>
         
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <TouchableOpacity onPress={back} >
              <Image
                source={require('../../../assets/Images/back.png')}
                style={{ marginTop: 25, width: 15, height: 25, marginLeft: 20 }}
              />
            </TouchableOpacity>
            <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '700', marginRight: 90 }}>
              Health One - Membership
            </Text>
          </View>

   
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.topFlatListContainer}>
            {imageData.map((item) => (
              <View key={item.id} style={styles.imageContainer}>
                <Image source={item.source} style={styles.fullImage} resizeMode="cover" />
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 25 }}>₹</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 50 }}>{item.Description} </Text>
                  <Text style={{ fontSize: 30, marginTop: 18, marginRight: 20, color: '#8a8d9f' }}>
                    {item.Text}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>


          <View style={styles.benefitsContainer}>
            {data.map((item) => (
              <View key={item.id} style={styles.bottomItemContainer}>
                <Image source={item.source1} style={styles.iconImage} resizeMode="contain" />
                <Text style={styles.bottomItemText}>{item.title}</Text>
              </View>
            ))}
          </View>

         {/* <TouchableOpacity></TouchableOpacity>
          <Image
            source={require('../../../assets/Images/PayButton.png')}
            style={styles.payButton}
            resizeMode="contain"
          /> */}

<TouchableOpacity  style={styles.payButtonWrapper} onPress={PaymentSuccess}>
    <Image
      source={require('../../../assets/Images/PayButton.png')}
      style={styles.payButtonImage}
    />
  </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#006241',
  },
  payButtonWrapper: {
    marginTop: 80,
    marginBottom: 10,
    alignSelf: 'center',
  },
  
  payButtonImage: {
    width: 380,
    height: 110,
    resizeMode: 'contain',
  },
  
  container: {
    alignItems: 'center',
    paddingTop: 10,
  },
  image: {
    width: 180,
    height: 55,
    marginBottom: 40,
  },
  card: {
    width: '100%',
    backgroundColor: '#f4f6f9',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 60,
  },
  imageContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    width: SCREEN_WIDTH - 40,
    marginHorizontal: 20,
  },
  fullImage: {
    width: '100%',
    height: 300,
    marginBottom:15,
    borderRadius: 15,
  },
  topFlatListContainer: {
    marginTop: 30,
  },
  benefitsContainer: {
    marginTop: 20,
    width: '80%',
    marginRight:25,
    
  },
  bottomItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconImage: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  bottomItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  payButton: {
    marginTop: 20,
    width: '100%',
    height: 100,
  },
});

export default MemberShip;
