import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_MARGIN = 8;
const CARD_WIDTH = (SCREEN_WIDTH - 60) / 2;

const hospital = [
  {
    id: '1',
    source: require('../../../assets/Images/Hospital.png'),
    title: 'Apollo Hospital',
    dis: 'Navi Mumbai',
  },
  {
    id: '2',
    source: require('../../../assets/Images/ManipalHospital.png'),
    title: 'Manipal Hospital',
    dis: 'Mumbai',
  },
  {
    id: '3',
    source: require('../../../assets/Images/Hospital.png'),
    title: 'Apollo Hospital',
    dis: 'Navi Mumbai',
  },
  {
    id: '4',
    source: require('../../../assets/Images/ManipalHospital.png'),
    title: 'Manipal Hospital',
    dis: 'Mumbai',
  },
  {
    id: '5',
    source: require('../../../assets/Images/Hospital.png'),
    title: 'Apollo Hospital',
    dis: 'Navi Mumbai',
  },
  {
    id: '6',
    source: require('../../../assets/Images/ManipalHospital.png'),
    title: 'Manipal Hospital',
    dis: 'Mumbai',
  },
  {
    id: '7',
    source: require('../../../assets/Images/Hospital.png'),
    title: 'Apollo Hospital',
    dis: 'Navi Mumbai',
  },
  {
    id: '8',
    source: require('../../../assets/Images/ManipalHospital.png'),
    title: 'Manipal Hospital',
    dis: 'Mumbai',
  },
];
const { width } = Dimensions.get('window');
const PartnerHospital = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const back = () => {
    navigation.goBack();
  };

  const handleImagePress = (item) => {

    console.log('Pressed:', item.title);
   
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={back}>
            <Image
              source={require('../../../assets/Images/back.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Partner Hospital</Text>
        </View>

        <FlatList
          data={hospital}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatListStyle}
          columnWrapperStyle={styles.rowStyle}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.serviceCard}
              onPress={() => handleImagePress(item)}
            >
              <Image source={item.source} style={styles.imageStyle} />
              <Text style={styles.textStyle}>{item.title}</Text>
              <Text style={styles.textStyle1}>{item.dis}</Text>
            </TouchableOpacity>
          )}
        />
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
    // backgroundColor: '#f4f6f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backIcon: {
    width: 15,
    height: 25,
    marginTop: 8,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '700',
    marginLeft: '20%',
    marginTop: '4%',
  },
  flatListStyle: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  rowStyle: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  serviceCard: {
    width: CARD_WIDTH,
    borderRadius: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',

    marginHorizontal: CARD_MARGIN,
    marginBottom: 10,
    height: 200,
  },
  imageStyle: {
    width: '100%',
    height: 120,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 10,
    color: '#333',
  },
  textStyle1: {
    fontSize: 15,
    // fontWeight: '600',
    marginTop: 2,
    marginLeft: 10,
    color: 'grey',
  },
});

export default PartnerHospital;
