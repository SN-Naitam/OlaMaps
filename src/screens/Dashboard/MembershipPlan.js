


import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PremiumMembership from './PremiumMembership';

const newimageData = [
  {
    id: '1',
    source: require('../../../assets/Images/premium.png'),
    Description: 'Premium Membership',
    source1: require('../../../assets/Images/rightarrow.png'),
  },
  {
    id: '2',
    source: require('../../../assets/Images/blueambulance.png'),
    Description: 'Essential Membership',
    source1: require('../../../assets/Images/rightarrow.png'),
  },
  {
    id: '3',
    source: require('../../../assets/Images/services.png'),
    Description: 'Assure Membership',
    source1: require('../../../assets/Images/rightarrow.png'),
  },
];

const MembershipPlan = () => {
  const navigation = useNavigation();

  const services = () => {
    navigation.navigate('Services', { serviceList: newimageData });
  };

  const back =()=>{
    navigation.goBack()
  }

  const primium =()=>{
    navigation.navigate('PremiumMembership')
  }
  const renderServiceItem = ({ item }) => (
    <View style={styles.serviceCard}>
      <View style={styles.serviceCardHeader}>
        <Image
          source={item.source}
          style={styles.serviceCardImage}
          resizeMode="cover"
        />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={styles.serviceCardText}>{item.Description}</Text>
      <TouchableOpacity onPress={primium}>
      <Image
          source={item.source1}
    
        style={{width:15,height:25,marginTop:18,marginRight:15}}/>
        </TouchableOpacity>
     </View>

  
      {item.id === '1' && (
        <View style={styles.priceContainer}>
          <Text style={styles.rupeeSymbol}>₹</Text>
          <Text style={styles.priceText}>1000</Text>
          <Text style={styles.priceCycle}> Monthly</Text>
        </View>
      )}

{item.id === '2' && (
        <View style={styles.priceContainer}>
          <Text style={styles.rupeeSymbol}>₹</Text>
          <Text style={styles.priceText}>499</Text>
          <Text style={styles.priceCycle}> Monthly</Text>
        </View>
      )}
      
{item.id === '3' && (
        <View style={styles.priceContainer}>
          <Text style={styles.rupeeSymbol}>₹</Text>
          <Text style={styles.priceText}>999</Text>
          <Text style={styles.priceCycle}> Monthly</Text>
        </View>
      )}

      <TouchableOpacity style={styles.activateButton}>
        <Text style={styles.activateButtonText}>Show Intrest</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
     <View  style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%',marginBottom:25 }}>
                   <TouchableOpacity onPress={back}>
                       <Image source={require('../../../assets/Images/back.png')}    style={{ marginTop: 8, width: 15, height: 25, marginLeft: 30 }}/>
                   </TouchableOpacity>
                   <Text style={{ marginTop: 1, fontSize: 25, fontWeight: '700', marginRight:'22%' }}>
                       Membership Plan
                           </Text>
               </View>
      <FlatList
        data={newimageData}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    paddingTop: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006241',
    textAlign: 'center',
    marginBottom: 20,
  },
  flatList: {
    paddingHorizontal: 0,
  },
  flatListContent: {
    paddingBottom: 30,
  },
  serviceCard: {
    width: '90%',
    height: 430,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginBottom: 20,
    alignSelf: 'center',
    overflow: 'hidden',
    elevation: 5,
  },
  serviceCardHeader: {
    height: 250,
    width: '100%',
  },
  serviceCardImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  serviceCardText: {
    padding: 5,
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginTop:6,
    marginLeft:'12'
  },
  activateButton: {
    borderWidth: 1,
    borderColor: '#006241',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '6%',
    backgroundColor: '#f4f5f7',
    elevation: 4,
  },
  activateButtonText: {
    color: '#006241',
    fontSize: 18,
    fontWeight: '700',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -5,
    marginLeft: 15,
  },
  rupeeSymbol: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
  },
  priceText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
  },
  priceCycle: {
    fontSize: 20,
    marginTop: 8,
    marginLeft: 5,
    color: 'grey',
  },
});

export default MembershipPlan;
