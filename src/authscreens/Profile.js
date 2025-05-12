import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import PremiumMembership from '../screens/Dashboard/PremiumMembership';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const premiumBanner = [
  {
    id: '1',
    source: require('../../assets/Images/premium.png'),
    source1: require('../../assets/Images/rightarrow.png'),
    title:'Premium Membership',
    Description: '1000',
    Text: 'Monthly',
  },
];

const Profile = () => {
  const navigation = useNavigation();

  
const back = () => {
navigation.goBack();
};

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
 <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 1 ,marginTop:'5%'}}>
          <TouchableOpacity onPress={back}>
            <Image
              source={require('../../assets/Images/back.png')}
              style={{ width: 15, height: 25, marginLeft: 20 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, fontWeight: '700', marginRight:'35%' }}>
           My - Profile
          </Text>
        </View>
        <View style={styles.membershipImageContainer}>
          <Image
            source={require('../../assets/Images/ProfileMember.png')}
            style={styles.membershipImage}
            resizeMode="contain"
          />
        </View>

       
        <View style={styles.membershipImageContainer}>
          <Image
            source={require('../../assets/Images/GiftCard.png')}
            style={styles.giftCardImage}
            resizeMode="contain"
          />
        </View>

      
        <Text style={styles.sectionTitle}>Discover Membership Plan</Text>

        <View style={styles.card}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {premiumBanner.map((item) => (
              <View key={item.id} style={styles.bannerContainer}>
                <Image
                  source={item.source}
                  style={styles.bannerImage}
                  resizeMode="cover"
                />
               <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
  <Text style={styles.priceSub1}>{item.title}</Text>

  <TouchableOpacity onPress={()=>navigation.navigate('PremiumMembership')} >
    <Image
      source={item.source1}
      style={styles.bannerImage1}
      resizeMode="cover"
    />
  </TouchableOpacity>
</View>
                <View style={styles.priceRow}>
                  <Text style={styles.rupee}>₹</Text>
                  <Text style={styles.price}>{item.Description}</Text>
                  <Text style={styles.priceSub}>{item.Text}</Text>
                </View>

                
                        <TouchableOpacity style={styles.activateButton1}>
                          <Text style={styles.activateButtonText1}>Show Interest</Text>
                        </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f5f7fa',
  },
  container: {
    flex: 1,
   
  },
  activateButton1: {
marginTop:'12%',
    borderWidth: 1,
    borderColor: '#006241',
    paddingVertical: 18,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 27,
   


    width: 300,
  },
  activateButtonText1: {
    fontSize: 18,
    fontWeight: '600',
    color: '#006241',
  },
  membershipImageContainer: {
    alignItems: 'center',

  },
  membershipImage: {
    width: SCREEN_WIDTH * 0.9,
    height: 200,
    marginTop:15
  },
  giftCardImage: {
    width: SCREEN_WIDTH * 1,
    height: 200,
    marginTop:-15
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginHorizontal: 20,
    marginTop:-18,
    marginBottom:10


  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 15,
    // paddingVertical: 10,
    // paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    height:390
  },
  bannerContainer: {
    // marginRight: 15,
    width: SCREEN_WIDTH * 0.9,
  },
  bannerImage: {
    width: '100%',
    height: 180,
    borderRadius: 15,
  },
  bannerImage1: {
    width: '5%',
    height: 25,
    marginRight:25,
    marginTop:16,
    color:'black'

   
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',

    marginLeft: 12,
  },
  rupee: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 4,
  },
  priceSub: {
    fontSize: 18,
    color: '#888',
  },
  priceSub1:{
    fontSize: 20,
    marginLeft:12,
    marginTop:12

  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
   
  },
  priceSub1: {
    fontSize: 22,
    color: '#333',
    flexShrink: 1,
    marginLeft: 10,
    marginTop:10,
    fontWeight:'500'
  },
  bannerImage1: {
    width: 20,
    height: 25,
    borderRadius: 8,
    marginRight:25,
    marginTop:18
  },
});

export default Profile;
