import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const yoga = [
  {
    id: '1',
    source: require('../../../assets/Images/Frame.png'),

    title: 'How to Reduce Back Pain Dhanurasan & \nVakrasan'
  },
  {
    id: '2',
    source: require('../../../assets/Images/Frames.png'),
    title: 'How to Reduce Back Pain - FREE Yoga Series \n No 7 -  Bhujangasan & Shalabhasan'

  },
  {
    id: '3',
    source: require('../../../assets/Images/Hardframe.png'),
    title: 'How to Reduce Waistline - Trikonasan || - Freaa\n Yoga Series Mo 6'
  },
  {
    id: '4',
    source: require('../../../assets/Images/kanasan.png'),
    title: 'Konasan | & ||- Yoga Series No 5 - Sideward \n Stretch of the Spine'
  }
];

const { width } = Dimensions.get('window');

const YogaGallery = () => {
const navigation=useNavigation();

const back =()=>{
  navigation.goBack();
}
  return (
    <ScrollView style={styles.container}>
       <View style={styles.header}>
                <TouchableOpacity onPress={back}>
                  <Image
                    source={require('../../../assets/Images/back.png')}
                    style={styles.backIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Yoga Gallery</Text>
              </View>
      <FlatList
        data={yoga}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.source} style={styles.image} resizeMode="cover" />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        
      />



    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flex: 1
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
    marginLeft: '25%',
    marginTop: '4%',
  },
  card: {
    marginBottom: 25,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  image: {
    width: width - 20, 
    height: 200,
  },
  title: {
    padding: 10,
    fontSize: 16,
    color: '#333',
    // fontWeight: '500'
  }
});

export default YogaGallery;
