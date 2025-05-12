import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
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
import PremiumMembership from './PremiumMembership';
import MembershipPlan from './MembershipPlan';
import ServiceNursing from './ServiceNursing';
import NursingServices from './NursingServices';
import Profile from '../../authscreens/Profile';

// const { width: SCREEN_WIDTH } = Dimensions.get('window');
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


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
  {
    id: '4',
    source: require('../../../assets/Images/services.png'),
    Description: 'Doctor at Home',
  },
  {
    id: '5',
    source: require('../../../assets/Images/Therapist.png'),
    Description: 'Physiotherapists',
  },
  {
    id: '6',
    source: require('../../../assets/Images/food.png'),
    Description: 'Diettians',
  },
  
];

const premiumBanner = [
  {
    id: '1',
    source: require('../../../assets/Images/premium.png'),
    Description: '1000',
    Text: 'Monthly',
  },
];

const premiumFeatures = [
  {
    id: '1',
    icon: require('../../../assets/Images/check.png'),
    title: 'Medicines & Tests',
  },
  {
    id: '2',
    icon: require('../../../assets/Images/check.png'),
    title: 'Quality Care at Home',
  },
  {
    id: '3',
    icon: require('../../../assets/Images/check.png'),
    title: 'Wellness & Mobility',
  },
  {
    id: '4',
    icon: require('../../../assets/Images/check.png'),
    title: 'Premium Benefits Coming Soon',
  },
  {
    id: '5',
    icon: require('../../../assets/Images/check.png'),
    title: 'Free ₹100 Pathlab Vouchers',
  },
];

// const Dashboard = () => {
const DashboardScreen = () => {
  const draw=()=>{
    navigation.openDrawer()
  }
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const nav=()=>{
    navigation.navigate('MembershipPlan')
    }
  const renderServiceCard = ({ item }) => (
    <View style={styles.serviceCard}>
      <Image source={item.source} style={styles.serviceCardImage} resizeMode="cover" />
      <Text style={styles.serviceCardText}>{item.Description}</Text>
      <TouchableOpacity
        style={styles.activateButton}
        onPress={() => navigation.navigate('NursingServices', { itemData: item })}

      >
        <Text style={styles.activateButtonText}>Details</Text>
      </TouchableOpacity>
    </View>





  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
    
        <View style={styles.header}>
          {/* <TouchableOpacity onPress={() => navigation.openDrawer()}> */}
          <TouchableOpacity onPress={draw}>
            <Image source={require("../../../assets/Images/menu.png")} style={styles.icon} />
          </TouchableOpacity >
          <Image
            source={require('../../../assets/Images/greenlogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={require("../../../assets/Images/User.png")} style={styles.userIcon} />
          </TouchableOpacity>
        </View>

       
        <View style={styles.imageSection}>
          <Image source={require('../../../assets/Images/ActivePlan.png')} style={styles.fullImage} />
          <Image source={require('../../../assets/Images/GiftCard.png')} style={styles.fullImage1} />
        </View>

      
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Services</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ServiceNursing', { serviceList: newimageData })}>
              <Text style={styles.viewMoreText}>View More</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={newimageData}
            renderItem={renderServiceCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
            ref={flatListRef}
          />
        </View>



<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'1%',padding:20}}>
  <TouchableOpacity>
  <Text style={{fontSize:22,fontWeight:'700',}}>Coming Soon</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={nav} > 
  <Text style={{marginTop:6,fontSize:16,    color: 'gray',}}>View More</Text>
  </TouchableOpacity>
</View>

        <View style={styles.card}>
              
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Premium Membership</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.premiumBannerScroll}>
            {premiumBanner.map((item) => (
              <View key={item.id} style={styles.bannerContainer}>
                <Image source={item.source} style={styles.bannerImage} resizeMode="cover" />
                <View style={styles.priceRow}>
                  <Text style={styles.rupee}>₹</Text>
                  <Text style={styles.price}>{item.Description}</Text>
                  <Text style={styles.priceSub}>{item.Text}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={styles.benefitsContainer}>
            {premiumFeatures.map((item) => (
              <View key={item.id} style={styles.benefitItem}>
                <Image source={item.icon} style={styles.benefitIcon} />
                <Text style={styles.benefitText}>{item.title}</Text>
              </View>
            ))}
            
          </View>
          
          <TouchableOpacity
        style={styles.activateButton1}
        onPress={() => navigation.navigate('PremiumMembership', { serviceList: premiumBanner })}
      >
        <Text style={styles.activateButtonText1}>View Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.activateButton2}
        onPress={() => navigation.navigate('Services', { serviceList: newimageData })}
      >
        <Text style={styles.activateButtonText2}>Show Intrest</Text>
      </TouchableOpacity>
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
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  logo: {
    width: 160,
    height: 50,
  },
  userIcon: {
    width: 30,
    height: 35,
  },
  imageSection: {
    alignItems: 'center',
    gap: 15,
    paddingVertical: 10,
  },
  fullImage: {
    width: '90%',
    height: 100,
    borderRadius: 12,
  },
  fullImage1: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  viewMoreText: {
    fontSize: 16,
    color: 'gray',
    marginTop:5
  },
  flatListContent: {
    paddingHorizontal: 15,
  },
  serviceCard: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 15,
    paddingBottom: 20,
 
  },
  serviceCardImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  serviceCardText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    textAlign: 'center',
    marginLeft:12,
    textAlign:'left'
  },
  activateButton: {
    marginTop: 22,
    borderWidth: 1,
    borderColor: '#006241',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#f4f5f7',
  },
  activateButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#006241',
  },
  activateButton1: {
marginBottom:15,
    borderWidth: 1,
    borderColor: '#006241',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 14,
    backgroundColor: '#006241',
  },
  activateButtonText1: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  activateButton2: {
    marginBottom:20,
    borderWidth: 1,
    borderColor: '#006241',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 14,
    backgroundColor: '#f4f5f7',
  },
  activateButtonText2: {
    fontSize: 16,
    fontWeight: '600',
    color: '#006241',
  },
  card: {
    marginTop: -14,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    height:670
  
  },
  cardHeader: {
    backgroundColor: 'black',
    padding: 16,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'

  },
  premiumBannerScroll: {

  },
  bannerContainer: {
    width:'100%',

  },
  // bannerImage: {
  //   width: '160%',
  //   height: 220,
  //   marginRight:30

  // },
  bannerImage: {
    width: SCREEN_WIDTH * 0.9,
    height: 220, 
    borderRadius: 1, 
    marginRight: 30, 
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
    marginLeft: 20,
  },
  rupee: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 40,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  priceSub: {
    fontSize: 24,
    color: '#888',
  },
  benefitsContainer: {
    padding: 20,
    paddingTop: 10,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  benefitIcon: {
    width: 10,
    height: 10,
    marginRight: 10,
    color:'green'
  },
  benefitText: {
    fontSize: 16,
    color: '#333',
  },
});

export default DashboardScreen;

