

import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import MemberShip from '../screens/HomeScreen/MemberShip';

// import Dashboard from '../screens/Dashboard/DashboardScreen';
import Services from '../screens/Services/Services';
import PartnerHospital from '../screens/HospitalScreen/PartnerHospital';
import YogaGallery from '../screens/HospitalScreen/YogaGallery';
import Contact from '../authscreens/Contact';
import Logout from '../authscreens/Logout';
// import PremiumMembership from '../screens/Dashboard/PremiumMembership';
import NursingServices from '../screens/Dashboard/NursingServices';
import ServiceNursing from '../screens/Dashboard/ServiceNursing';
import PaymenCancel from '../screens/PaymentScreen/PaymenCancel';
import HomeScreen from '../screens/Dashboard/MembershipPlan';
import SplashScreen from '../screens/Splash/SplashScreen';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import MembershipPlan from '../screens/Dashboard/MembershipPlan';


const { width } = Dimensions.get('window');

enableScreens();
const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.customItem}>
    <Text style={styles.drawerLabel}>{label}</Text>
    <Image
      source={require('../../assets/Images/iconarrow.png')}
      style={styles.iconStyle}
    />
  </TouchableOpacity>
);

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollContainer}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Image
          source={require('../../assets/Images/greenlogo.png')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image
            source={require('../../assets/Images/Vector.png')}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>


      <View style={styles.userSection}>
        <Image
          source={require('../../assets/Images/alex.png')}
          style={styles.userImage}
          resizeMode="cover"
        />
        <View style={styles.userOverlay}>
          <Text style={styles.userGreeting}>Hi</Text>
          <Text style={styles.userName}>Alexa Smith</Text>
        </View>
      </View>

   
      <View style={styles.drawerItemsContainer}>
        {/* <CustomDrawerItem label="Dashboard" onPress={() => props.navigation.navigate('Dashboard')} /> */}
        <CustomDrawerItem label="Dashboard" onPress={() => props.navigation.navigate('DashboardScreen')} />
        <CustomDrawerItem label='Membership Plan' onPress={() => props.navigation.navigate('MembershipPlan')} />
        {/* <CustomDrawerItem label="Premium Membership" onPress={() => props.navigation.navigate('PremiumMembership')} /> */}
        <CustomDrawerItem label='PaymenCancel' onPress={() => props.navigation.navigate('PaymenCancel')} />
        <CustomDrawerItem label="Partner Hospital" onPress={() => props.navigation.navigate('PartnerHospital')} />
        <CustomDrawerItem label="Yoga Gallery" onPress={() => props.navigation.navigate('YogaGallery')} />
        <CustomDrawerItem label="Contact Us" onPress={() => props.navigation.navigate('Contact')} />
        <CustomDrawerItem label="Logout" onPress={() => props.navigation.navigate('HomeScreen')} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  logo: {
    width: 150,
    height: 60,
    resizeMode: 'contain',
  },
  closeIcon: {
    width: 20,
    height: 20,
    tintColor: '#333',
  },
  userSection: {
    position: 'relative',
    width: '100%',
    height: 90,
    marginTop: 10,
  },
  userImage: {
    width: '100%',
    height: '110%',
    borderRadius: 10,
  },
  userOverlay: {
    position: 'absolute',
    top: 8,
    left: 20,
  },
  userGreeting: {
    fontSize: 20,
    color: 'white',
  },
  userName: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    marginTop: 8,
  },
  drawerItemsContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  customItem: {
    backgroundColor: '#f5f7fa',
    marginVertical: 6,
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  iconStyle: {
    width: 12,
    height: 20,
    tintColor: 'black',
  },
});

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name='DashboardScreen' component={DashboardScreen} />
      <Drawer.Screen name='MembershipPlan' component={MembershipPlan} />
      {/* <Drawer.Screen name="PremiumMembership" component={PremiumMembership} /> */}
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="PartnerHospital" component={PartnerHospital} />
      <Drawer.Screen name="YogaGallery" component={YogaGallery} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

