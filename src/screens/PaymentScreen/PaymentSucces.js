


import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import DashboardScreen from '../Dashboard/DashboardScreen';
import DrawerNavigator from '../../navigations/Drawer';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const imageData = [
  {
    id: '1',
    source: require('../../../assets/Images/successpayment.png'),
    Description: 'Payment Success!',
    Text: '₹ 99',
  },
];

const data = [
  {
    id: '1',
    title: 'Health ONE - MemberShip',
    Ref: '000085752257',
    date: 'Apr 08,2025',
    time: '10:10 AM',
    paymentmethod: 'Credit Card',
    sendername: 'Alexa Smith',
    Amount: '₹99',
  },
];

const PaymentSuccess = () => {
  const navigation = useNavigation();

  const Draw = () => {
    navigation.navigate('DrawerNavigator');
  };

  const renderTopItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <View style={styles.glowWrapper}>
        <Image source={item.source} style={styles.fullImage} resizeMode="cover" />
      </View>
      <Text style={styles.descriptionText}>{item.Description}</Text>
      <Text style={styles.amountMainText}>{item.Text}</Text>
      <View style={styles.dashedUnderline} />
    </View>
  );

  const renderBottomItem = ({ item }) => (
    <View style={styles.bottomItemContainer}>
      <View style={styles.activateButton}>
        <Text style={styles.activateButtonText}>{item.title}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.labelText}>Ref Number</Text>
        <Text style={styles.valueText}>{item.Ref}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.labelText}>Date</Text>
        <Text style={styles.valueText}>{item.date}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.labelText}>Time</Text>
        <Text style={styles.valueText}>{item.time}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.labelText}>Payment Method</Text>
        <Text style={styles.valueText}>{item.paymentmethod}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.labelText}>Sender Name</Text>
        <Text style={styles.valueText}>{item.sendername}</Text>
      </View>
      <View style={styles.dashedUnderline1} />
      <View style={[styles.rowBetween, { marginTop: 10 }]}>
        <Text style={styles.labelText}>Amount</Text>
        <Text style={styles.amountText}>{item.Amount}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      persistentScrollbar={false}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <FlatList
            data={imageData}
            renderItem={renderTopItem}
            keyExtractor={(item) => item.id}
            horizontal
            scrollEnabled={false}
            contentContainerStyle={styles.topFlatListContainer}
          />
          <FlatList
            data={data}
            renderItem={renderBottomItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            horizontal={false}
            contentContainerStyle={styles.bottomFlatListContainer}
          />
        </View>

        <TouchableOpacity onPress={Draw}>
          <View style={styles.activateButton1}>
            <Text style={styles.activateButtonText1}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f5f7fa',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    maxHeight: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginTop: '10%',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  glowWrapper: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#e6f4ea',
    borderColor: '#2e7d32',
    borderWidth: 2,
    shadowColor: '#2e7d32',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
    marginBottom: 10,
  },
  fullImage: {
    width: 50,
    height: 50,
  },
  descriptionText: {
    fontSize: 20,
    marginBottom: 5,
  },
  amountMainText: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  dashedUnderline: {
    width: '100%',
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#2e7d32',
    borderStyle: 'dashed',
    marginTop: -2,
    marginBottom: 2,
  },
  dashedUnderline1: {
    width: '100%',
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#2e7d32',
    borderStyle: 'dashed',
    marginTop: 15,
    marginBottom: 5,
  },
  bottomItemContainer: {
    marginBottom: '-2%',
    width: '100%',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 6,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#828282',
    flex: 1,
  },
  valueText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4d4d4d',
    flex: 1,
    textAlign: 'right',
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    textAlign: 'right',
  },
  activateButton1: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: '8%',
    width: SCREEN_WIDTH - 40, 
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#006241',
    alignSelf: 'center',
  },
  activateButtonText1: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },
  activateButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#f4f5f7',
  },
  activateButtonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  topFlatListContainer: {
    marginBottom: 1,
  },
  bottomFlatListContainer: {
    marginBottom: 20,
  },
});

export default PaymentSuccess;
