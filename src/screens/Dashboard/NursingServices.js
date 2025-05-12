import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
  FlatList,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const imageData = [
  { id: '1', source: require('../../../assets/Images/CareHome.png'),title:"MSS Healthcare and \n Hospitality Vagle Estate \n Thane " },
  { id: '2', source: require('../../../assets/Images/doctorgirl.png'),title:"Health Home24,\n  Ghatkopar" },
  { id: '3', source: require('../../../assets/Images/services.png'),title:"Cosmos Home - Healthcare\n Services Chembur, Mumbai" },
  { id: '4', source: require('../../../assets/Images/premium.png'),title:"Jay Malhar Nursing\n Company Shirgaon, Kalyan- \n Dombivili" },
];

const NursingServices = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { itemData } = route.params;

  const rotateAnim1 = useRef(new Animated.Value(0)).current;
  const rotateAnim2 = useRef(new Animated.Value(0)).current;
  const rotateAnim3 = useRef(new Animated.Value(0)).current;

  const [isServiceVisible, setServiceVisible] = useState(false);
  const [isBenefitsVisible, setBenefitsVisible] = useState(false);
  const [isDisclaimerVisible, setDisclaimerVisible] = useState(false);

  const back = () => navigation.goBack();

  const toggleDropdown = (isVisible, setVisible, rotateAnim, setDropdownVisibility) => {
    setDropdownVisibility(!isVisible);

    Animated.timing(rotateAnim, {
      toValue: isVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotateArrow = (animation) =>
    animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <Image
            source={require('../../../assets/Images/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

      
        <Text style={styles.title}>{itemData.Description}</Text>
      </View>

      <Image source={itemData.source} style={styles.mainImage} />

 
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() =>
          toggleDropdown(isServiceVisible, setServiceVisible, rotateAnim1, setServiceVisible)
        }
      >
        <View style={styles.dropdownRow}>
          <Text style={styles.dropdownText}>Service Details</Text>
          <Animated.Image
            source={require('../../../assets/Images/DownArrow.png')}
            style={[styles.arrow, { transform: [{ rotate: rotateArrow(rotateAnim1) }] }]}
          />
        </View>
      </TouchableOpacity>
      {isServiceVisible && (
        <View style={styles.dropdownContent}>
          <Text style={styles.dropdownItem}>
            This is the service detail. It provides information about the nursing services included in the package.
          </Text>
        </View>
      )}


      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() =>
          toggleDropdown(isBenefitsVisible, setBenefitsVisible, rotateAnim2, setBenefitsVisible)
        }
      >
        <View style={styles.dropdownRow}>
          <Text style={styles.dropdownText}>Benefits</Text>
          <Animated.Image
            source={require('../../../assets/Images/DownArrow.png')}
            style={[styles.arrow, { transform: [{ rotate: rotateArrow(rotateAnim2) }] }]}
          />
        </View>
      </TouchableOpacity>
      {isBenefitsVisible && (
        <View style={styles.dropdownContent}>
          <Text style={styles.dropdownItem}>
            This section highlights the benefits such as professional care, 24/7 support, and more.
          </Text>
        </View>
      )}

 
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() =>
          toggleDropdown(isDisclaimerVisible, setDisclaimerVisible, rotateAnim3, setDisclaimerVisible)
        }
      >
        <View style={styles.dropdownRow}>
          <Text style={styles.dropdownText}>Disclaimer</Text>
          <Animated.Image
            source={require('../../../assets/Images/DownArrow.png')}
            style={[styles.arrow, { transform: [{ rotate: rotateArrow(rotateAnim3) }] }]}
          />
        </View>
      </TouchableOpacity>
      {isDisclaimerVisible && (
        <View style={styles.dropdownContent}>
          <Text style={styles.dropdownItem}>
            This information is for reference only and subject to terms and conditions.
          </Text>
        </View>
      )}

  
      <TouchableOpacity style={styles.activateButton}>
        <Text style={styles.activateButtonText}>Book Services</Text>
      </TouchableOpacity>

    
      <FlatList
        data={imageData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.source} style={styles.flatListImage} />
            <Text style={styles.title1}> {item.title}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f7fa',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  backIcon: {
    width: 20,
    height: 25,
    marginRight: 10,
    marginTop:6
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
    marginBottom: 30,
  },
  mainImage: {
    width: '100%',
    height: 220,
    marginBottom: 20,
    borderRadius: 10,
  },
  dropdownButton: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
    height: 60,
    justifyContent: 'center',
  },
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 20,
    fontWeight: '600',
  },
  arrow: {
    width: 25,
    height:15,
  },
  dropdownContent: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  dropdownItem: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
  activateButton: {
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    borderColor: '#006241',
    backgroundColor: '#006241',
  },
  activateButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  flatListContent: {
    marginTop: 20,
    paddingVertical: 10,

  },
  imageContainer: {
    marginRight: 10,
  },
  flatListImage: {
    width: 220,
    height: 150,
    borderRadius: 10,
    // marginBottom:'80%'
  },
  title1:{
    fontSize:18,
    textAlign:'center',
    marginBottom:'80%',
    marginTop:8
  }
});

export default NursingServices;
