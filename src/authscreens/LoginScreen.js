

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
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
import OtpScreen from './OtpScreen';


const { width: SCREEN_WIDTH } = Dimensions.get('window');




const LoginScreen = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  




  // const Handlepress=()=>{
  //   navigation.navigate('OtpScreen')
  // }

  const Handlepress = () => {
    if (mobileNumber.trim() === '') {
      setError('Required');
      return;
    }
  
    if (mobileNumber.length !== 10) {
      setError('Please enter a 10-digit mobile number');
      return;
    }
  
    const isValidMobile = /^[6-9]\d{9}$/.test(mobileNumber);
    if (!isValidMobile) {
      setError('Enter a valid  mobile number');
      return;
    }
  
   
    setError('');
    navigation.navigate('OtpScreen',{mobileNumber});
  };
  

  const back = () => {
    navigation.goBack(); 
  };
  ;
  
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/Logo.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.card}>
        
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <TouchableOpacity onPress={back}  >
              <Image
                source={require('../../assets/Images/back.png')}
                style={{ marginTop: 25, width: 15, height: 25, marginLeft: 30 }}
              />
            </TouchableOpacity>
            <Text style={{ marginTop: 20, fontSize: 22, fontWeight: '700', marginRight: 90 }}>
             Welcome to the App
            </Text>
           
          </View>
          <Text style={{marginTop:5,fontSize:18,color:'#8a8d9f'}}>Login with Mobile</Text>

          <View style={styles.container1}>
      {/* <TextInput
        placeholder='+91 Mobile Number'
        placeholderTextColor="#888"
        style={styles.input}
        keyboardType="phone-pad"
        maxLength={10} 
      /> */}
<TextInput
  placeholder='+91 Mobile Number'
  placeholderTextColor="#888"
  style={styles.input}
  keyboardType="phone-pad"
  maxLength={10}
  value={mobileNumber}
  onChangeText={(text) => {
    setMobileNumber(text.replace(/[^0-9]/g, '')); 
    setError('');
  }}
/>

<View style={{height:25}}>
{error ? <Text style={{ color: 'red', marginTop: 5 }}>{error}</Text> : null}
</View>

    </View>
   
        <TouchableOpacity onPress={Handlepress}>
                <View style={styles.activateButton1}>
                <Text style={styles.activateButtonText1}>Generate OTP</Text>
              </View>
                </TouchableOpacity>

       <Text style={{marginTop:15,fontSize:26,fontWeight:'600'}}> OR</Text>

  
       <TouchableOpacity >
                <View style={styles.activateButton}>
                  <Image source={require('../../assets/Images/google.png')} style={{width:30,height:30,marginRight:'5%'}}/>
                <Text style={styles.activateButtonText}> Continue with Google</Text>
              </View>
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
    height:'100%',
    
  },
  container1: {
    width: '95%',
    padding: 10,
    marginTop:'8%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 16,
    color: '#000',
  },

  activateButton1: {
   
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    // marginTop: '4%',
         width:'80%',
    height:60,
    justifyContent:'center',

    
  
       backgroundColor: '#006241', 
    width: SCREEN_WIDTH-40,
    alignSelf: 'center',
 },
   
activateButtonText1: {
  color: '#ffffff',
  fontSize: 18,
  fontWeight: '600',
 
},


activateButton: {
   
  paddingVertical: 8,
  paddingHorizontal: 24,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: '5%',
       width:'80%',
  height:60,
  justifyContent:'center',
  flexDirection:'row',

  

borderWidth:1,
  width: SCREEN_WIDTH-40,
  alignSelf: 'center',
},
 
activateButtonText: {
color: 'black',
fontSize: 18,
fontWeight: '600',

},

  
});

export default LoginScreen;
