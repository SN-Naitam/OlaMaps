import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
// import Dashboard from '../screens/Dashboard/DashboardScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import DrawerNavigator from '../navigations/Drawer';


const { width: SCREEN_WIDTH } = Dimensions.get('window');

const OtpScreen = () => {
  const route = useRoute();
  const { mobileNumber } = route.params;
  const navigation = useNavigation();

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < 5) {
        inputs.current[index + 1].focus();
      }

      setShowError(false);
      setError('');
    } else if (text === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      setShowError(false);
      setError('');
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join('');
    setShowError(true);

    if (enteredOtp.length !== 6) {
      setError('Required');
      return;
    }


    setError('');
    setShowError(false);
    // alert(`OTP Verified: ${enteredOtp}`);
    navigation.navigate('DrawerNavigator')

   
  };

  const back = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/Logo.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.card}>
          <View style={styles.header}>
            <TouchableOpacity onPress={back}>
              <Image
                source={require('../../assets/Images/back.png')}
                style={{ width: 15, height: 25, marginLeft: 30 }}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>OTP Verification</Text>
          </View>

          <Text style={styles.subText}>Enter the code from the SMS we sent</Text>
          <Text style={{ fontSize: 18, color: '#8a8d9f' }}>
            to <Text style={{ color: 'black' }}>{mobileNumber}</Text>
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                ref={(ref) => (inputs.current[index] = ref)}
              />
            ))}
          </View>

          <View style={{ marginTop: 10, alignSelf: 'flex-start', marginLeft: 30,height:18 }}>
            {showError && error ? (
              <Text style={{ color: 'red' }}>{error}</Text>
            ) : null}
          </View>

          <View style={{ flexDirection: 'row',  }}>
            <Image
              source={require('../../assets/Images/clock.png')}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ marginLeft: '4%', fontSize: 16, color: 'green', fontWeight: '600' }}>
              00:59
            </Text>
          </View>

          <TouchableOpacity onPress={verifyOtp}>
            <View style={styles.activateButton1}>
              <Text style={styles.activateButtonText1}>Verify OTP</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#006241',
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
    minHeight: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 25,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 60,
  },
  subText: {
    marginTop: 10,
    fontSize: 18,
    color: '#8a8d9f',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 50,
    height: 60,
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  activateButton1: {
    marginTop: 30,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    width: SCREEN_WIDTH - 40,
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#006241',
    alignSelf: 'center',
  },
  activateButtonText1: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});
