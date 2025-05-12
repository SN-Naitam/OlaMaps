// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const PremiumMembership = () => {
//   const navigation=useNavigation()
//   const route = useRoute();
//   const { serviceList } = route.params; 
// const back =()=>{
//   navigation.goBack()
// }
//   return (
//     <ScrollView contentContainerStyle={styles.container}>

//         {serviceList.map((item) => (
          
//           <View key={item.id} style={styles.bannerContainer}>
//     <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%',marginBottom:40 }}>
//                <TouchableOpacity onPress={back}>
//                  <Image
//                    source={require('../../../assets/Images/back.png')}
//                    style={{ width: 15, height: 25, marginLeft: 20 ,}}
//                  />
//                </TouchableOpacity>
//                <Text style={{  fontSize: 22, fontWeight: '700', marginRight: 50 ,}}>
//                  Premium - Membership
//                </Text>
//              </View>
//             <Image source={item.source} style={styles.bannerImage} resizeMode="cover" />
//              <TouchableOpacity
//                     style={styles.activateButton1}
                   
//                   >
//                     <Text style={styles.activateButtonText1}>Show Intrest</Text>
//                   </TouchableOpacity>
//             <Text style={{fontSize:25,marginTop:'16%',marginLeft:10,fontWeight:'400'}}>Health ONE - Membership </Text>
          
//             <View style={styles.priceRow}>
//               <Text style={styles.rupee}>₹</Text>
//               <Text style={styles.price}>{item.Description}</Text>
//               <Text style={styles.priceSub}>{item.Text}</Text>
//             </View>
//           </View>
//         ))}
     
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#f5f7fa',
//     paddingBottom: 30,
//   },
//   card: {
//     marginTop: 20,
//     backgroundColor: '#fff',
//     marginHorizontal: 20,
//     borderRadius: 20,
//     overflow: 'hidden',
//     elevation: 4,
//   },
//   activateButton1: {
//    marginTop:'83%',
//         borderWidth: 1,
//         borderColor: '#006241',
//         paddingVertical: 18,
//         borderRadius: 5,
//         alignItems: 'center',
//         marginHorizontal: 30,
//         backgroundColor: '#006241',
//         position:'absolute',
//         marginLeft:158,
//         width:220
//       },
//       activateButtonText1: {
//         fontSize: 18,
//         fontWeight: '600',
//         color: 'white',
//       },
//   bannerContainer: {
//     width: '100%',
//     // marginTop: 100,
//     padding:15,
  

//   },
//   bannerImage: {
//     width: '100%',
//     height: 250,
//     overflow:"hidden",
//     borderRadius:20

//   },
//   priceRow: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginTop: 2,
//     marginLeft: 10,
//   },
//   rupee: {
//     fontSize: 28,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     marginHorizontal: 5,
//   },
//   priceSub: {
//     fontSize: 24,
//     color: '#888',
//     marginBottom:5
//   },
// });

// export default PremiumMembership;


import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
const screenHeight = Dimensions.get('window').height;
const PremiumMembership = () => {
  const navigation = useNavigation();

  const [isDropdown1Visible, setDropdown1Visible] = useState(false);
  const [isDropdown2Visible, setDropdown2Visible] = useState(false);

  // Animated values for rotation
  const rotateAnim1 = useRef(new Animated.Value(0)).current;
  const rotateAnim2 = useRef(new Animated.Value(0)).current;

  const back = () => {
    navigation.goBack();
  };

  const toggleDropdown = (dropdownNumber) => {
    if (dropdownNumber === 1) {
      setDropdown1Visible(!isDropdown1Visible);
      Animated.timing(rotateAnim1, {
        toValue: isDropdown1Visible ? 0 : 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      setDropdown2Visible(!isDropdown2Visible);
      Animated.timing(rotateAnim2, {
        toValue: isDropdown2Visible ? 0 : 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  };

  const arrowRotate1 = rotateAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const arrowRotate2 = rotateAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bannerContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 40 }}>
          <TouchableOpacity onPress={back}>
            <Image
              source={require('../../../assets/Images/back.png')}
              style={{ width: 15, height: 25, marginLeft: 20 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, fontWeight: '700', marginRight: 50 }}>
            Premium - Membership
          </Text>
        </View>

        <Image source={require('../../../assets/Images/premium.png')} style={styles.bannerImage} resizeMode="cover" />

        <TouchableOpacity style={styles.activateButton1}>
          <Text style={styles.activateButtonText1}>Show Interest</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, marginTop: '5%', marginLeft: 10, fontWeight: '400' }}>
          Health ONE - Membership
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.rupee}>₹</Text>
          <Text style={styles.price}>1000</Text>
          <Text style={styles.priceSub}>Monthly</Text>
        </View>


        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => toggleDropdown(1)}
        >
          <Text style={styles.dropdownText}>Package Details</Text>
          <Animated.Image
            source={require('../../../assets/Images/DownArrow.png')}
            style={{ width: 25, height: 15, transform: [{ rotate: arrowRotate1 }] }}
          />
        </TouchableOpacity>
        {isDropdown1Visible && (
          <View style={styles.dropdownContent}>
            <Text style={styles.dropdownItem}>
              is simply dummy text of the printing and typesetting industry. typesetting, remaining essentially unchanged
            </Text>
          </View>
        )}

     
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => toggleDropdown(2)}
        >
          <Text style={styles.dropdownText}>Benefits</Text>
          <Animated.Image
            source={require('../../../assets/Images/DownArrow.png')}
            style={{ width: 25, height: 15, transform: [{ rotate: arrowRotate2 }] }}
          />
        </TouchableOpacity>
        {isDropdown2Visible && (
          <View style={styles.dropdownContent}>
            <Text style={styles.dropdownItem}>
              is simply dummy text of the printing and typesetting industry. typesetting, remaining essentially unchanged
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f7fa',
    paddingBottom: 30,
  },
  // activateButton1: {
  //   marginTop: '83%',
  //   borderWidth: 1,
  //   borderColor: '#006241',
  //   paddingVertical: 18,
  //   borderRadius: 5,
  //   alignItems: 'center',
  //   marginHorizontal: 30,
  //   backgroundColor: '#006241',
  //   position: 'absolute',
  //   marginLeft: 158,
  //   width: 220,
  // },
  activateButton1: {
    marginTop: -38,
    borderWidth: 1,
    borderColor: '#006241',
    paddingVertical: 18,
    marginLeft:'30%',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 0,
    backgroundColor: '#006241',
    alignSelf: 'center',
    width: '70%', // or a percentage
  },
  
  activateButtonText1: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  bannerContainer: {
    width: '100%',
    padding: 15,
  },
  bannerImage: {
    width: '100%',
    height: 250,
    overflow: 'hidden',
    borderRadius: 20,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 2,
    marginLeft: 10,
  },
  rupee: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 40,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  priceSub: {
    fontSize: 24,
    color: '#888',
    marginBottom: 5,
  },
  dropdownButton: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 20,
    color: '#333',
    fontWeight: '500',
  },
  dropdownContent: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    // borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 5,
  },
  dropdownItem: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 15,
    color: '#333',
  },
});

export default PremiumMembership;
