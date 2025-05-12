
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


const { width: SCREEN_WIDTH } = Dimensions.get('window');



const HomeScreen = () => {
  const navigation = useNavigation();

 const back=()=>{
  navigation.goBack();
 }




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
                <Text style={{ fontSize: 24, fontWeight: '700', marginRight:'35%' }}>
                Contact Us
                </Text>
              </View>
 <View style={styles.card}>
      
          <View style={styles.card1}>
          <View>

<Text style={{textAlign:'center',fontSize:30,marginTop:10,fontWeight:'700',marginBottom:'10%'}}>Get in Touch</Text>

          </View>
          <View style={styles.dashedUnderline} />
          <View style={{marginTop:'8%'}}>
 <View style={styles.activateButton}>
        <Text style={styles.activateButtonText}>Call Us</Text>
        <Text style={styles.activateButtonText1}>+91 6697913884</Text>
      </View>
          </View>

          <View>
 <View style={styles.activateButton}>
        <Text style={styles.activateButtonText}>Email</Text>
        <Text style={styles.activateButtonText1}>support@healthywrinkles.CareHome</Text>
      </View>
          </View>

          <View>
          <View style={styles.dashedUnderline} />
 <View style={{marginTop:10}}>
        <Text style={styles.activateButtonText}>Address</Text>
        <Text style={{textAlign:"center",fontSize:18,fontWeight:'500'}}>132,Swastik Plaza Premises, {'\n'} Subhash Nagar, Pokhran Road No 2, {'\n'} Thane West - 400 606</Text>
      </View>
          </View>
                    
          </View>

          <View style={styles.container1}>
      <Image
        source={require('../../assets/Images/contact.png')}
        style={styles.image}
        resizeMode="contain" // Ensures the image scales properly without distortion
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
  
    alignItems: 'center',
    paddingTop: 10,
  },
  dashedUnderline: {
    width: 310,
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#2e7d32',
    borderStyle: 'dashed',
    marginTop: -2,
    marginBottom: 2,
  },
  container1: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f7fa', 
    marginBottom:65
   
  },
  image: {
    width: SCREEN_WIDTH * 1,
    height: SCREEN_WIDTH * 0.8, 
    borderRadius: 10,
    marginBottom: 30, 
    // borderWidth:1,
    
  },

  activateButton: {
    borderWidth:1,
      paddingVertical: 8,
      paddingHorizontal: 18,
      borderRadius: 5,
      alignItems: 'center',
      alignSelf: 'center',
      width:'90%',
      height:80,
      justifyContent:'center',
      marginBottom:20,
    

   
      backgroundColor: '#f4f5f7',  
   },
  activateButtonText: {
    color: 'grey',
 marginBottom:5,
    fontSize: 18,
    textAlign: 'center',
  },
  activateButtonText1: {
    color: 'black',
 fontWeight:"700",
    fontSize: 18,
    textAlign: 'center',
  },


  card: {
    width: '100%',
    backgroundColor: '#f4f6f9',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
    height: '100%',
  },
  card1: {
    width: '80%',
    height: 430,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    marginTop: 5,
  },
  

  
});

export default HomeScreen;

