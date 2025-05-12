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
import NursingServices from './NursingServices';


const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = (SCREEN_WIDTH - 60) / 2;
const ServiceNursing = () => {
    const navigation=useNavigation();
  const route = useRoute();
  const  serviceList  = route.params.serviceList; 
 

  const back =()=>{
    navigation.goBack()
  }


  const renderServiceItem = ({ item }) => (
    <View style={styles.serviceCard}>
      <Image source={item.source} style={styles.imageStyle} resizeMode="cover" />
      <Text style={styles.textStyle}>{item.Description}</Text>
      <TouchableOpacity style={{flexDirection:'row',}}    onPress={() => navigation.navigate('NursingServices', { itemData: item })}>
      <Text style={{color:'green',marginLeft:10,fontWeight:'500',fontSize:16,marginBottom:10}}>Details</Text>
      <Image source={require('../../../assets/Images/iconarrow.png')} style={{width:14,height:12,resizeMode:'center',marginTop:6}}/>
      </TouchableOpacity>

    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
     

        <View style={styles.card}>
           
            <View  style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <TouchableOpacity onPress={back}>
                    <Image source={require('../../../assets/Images/back.png')}    style={{ marginTop: 8, width: 15, height: 25, marginLeft: 30 }}/>
                </TouchableOpacity>
                <Text style={{ marginTop: 1, fontSize: 25, fontWeight: '700', marginRight:'40%' }}>
                          Services
                        </Text>
            </View>
        <FlatList
  data={serviceList}
  renderItem={renderServiceItem}
  keyExtractor={(item, index) => index.toString()}
  numColumns={2}
  key={2} 
  contentContainerStyle={styles.flatListStyle}
  columnWrapperStyle={styles.rowStyle}
  scrollEnabled={false}
/>

        </View>
      </View>
    </ScrollView>
  );
};



const CARD_MARGIN = 8;
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
   
  },
  container: {
    alignItems: 'center',
 
  },

  card: {
    width: '100%',
    backgroundColor: '#f4f6f9',

    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 60,
    height:'100%'
  },
  flatListStyle: {
  
    marginTop:'8%'
  },
  rowStyle: {
    justifyContent: 'space-between',
    marginBottom: 20,
 

  },
  serviceCard: {
    width: CARD_WIDTH,
    borderRadius: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginHorizontal: CARD_MARGIN,
    height:200

    
  },
  imageStyle: {
    width: '100%',
    height: 120,
    
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    // padding: 12,
    marginTop:10,marginLeft:10,
    color: '#333',
  },
});

export default ServiceNursing;


///This is without flatlist 

// import { useRoute } from '@react-navigation/native';
// import React from 'react';
// import {
//   View,
//   StyleSheet,
//   Image,
//   Text,
//   ScrollView,
//   Dimensions,
// } from 'react-native';

// const { width: SCREEN_WIDTH } = Dimensions.get('window');

// const Services = () => {
//   const route = useRoute();
//   const { serviceList } = route.params; 

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.container}>
//         <Image
//           source={require('../../../assets/Images/Logo.png')}
//           style={styles.logo}
//           resizeMode="contain"
//         />

//         <View style={styles.card}>
//           {serviceList.map((item) => (
//             <View key={item.id} style={styles.serviceCard}>
//               <Image source={item.source} style={styles.imageStyle} resizeMode="cover" />
//               <Text style={styles.textStyle}>{item.Description}</Text>
//             </View>
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     backgroundColor: '#006241',
//   },
//   container: {
//     alignItems: 'center',
//     paddingTop: 10,
//   },
//   logo: {
//     width: 180,
//     height: 55,
//     marginBottom: 20,
//   },
//   card: {
//     width: '100%',
//     backgroundColor: '#f4f6f9',
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//     alignItems: 'center',
//     paddingTop: 20,
//     paddingBottom: 60,
//     height: '100%',
//   },
//   serviceCard: {
//     marginBottom: 25,
//     borderRadius: 15,
//     backgroundColor: '#fff',
//     overflow: 'hidden',
//     width: SCREEN_WIDTH - 40,
//     alignSelf: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   imageStyle: {
//     width: '100%',
//     height: 200,
//   },
//   textStyle: {
//     fontSize: 18,
//     fontWeight: '600',
//     padding: 15,
//     color: '#333',
//   },
// });

// export default Services;
