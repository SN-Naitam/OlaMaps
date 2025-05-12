import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../authscreens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MemberShip from '../screens/HomeScreen/MemberShip';
import PaymentSucces from '../screens/PaymentScreen/PaymentSucces';
import PaymenCancel from '../screens/PaymentScreen/PaymenCancel';
import OtpScreen from '../authscreens/OtpScreen';
import Services from '../screens/Services/Services';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import DrawerNavigator from './Drawer';
import PremiumMembership from '../screens/Dashboard/PremiumMembership';
import MembershipPlan from '../screens/Dashboard/MembershipPlan';
import ServiceNursing from '../screens/Dashboard/ServiceNursing';
import NursingServices from '../screens/Dashboard/NursingServices';
import Profile from '../authscreens/Profile';
import SplashScreen from '../screens/Splash/SplashScreen';




const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name='SplashScreen' component={SplashScreen} />
    <Stack.Screen name='HomeScreen' component={HomeScreen} />
    <Stack.Screen name='LoginScreen' component={LoginScreen} />
    <Stack.Screen name='MemberShip' component={MemberShip} />
    <Stack.Screen name='PaymentSucces' component={PaymentSucces} />
    <Stack.Screen name='PaymenCancel' component={PaymenCancel} />
    <Stack.Screen name='OtpScreen' component={OtpScreen} />
    <Stack.Screen name='Services' component={Services} />
    <Stack.Screen name='DashboardScreen' component={DashboardScreen} />
    <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />
    <Stack.Screen name='PremiumMembership' component={PremiumMembership} />
    <Stack.Screen name='MembershipPlan' component={MembershipPlan} />
    <Stack.Screen name='ServiceNursing' component={ServiceNursing} />
    <Stack.Screen name='NursingServices' component={NursingServices} />
    <Stack.Screen name='Profile' component={Profile} />
 

 
  </Stack.Navigator>
  
  );
};

export default StackNavigation;
