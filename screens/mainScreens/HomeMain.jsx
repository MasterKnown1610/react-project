// import { Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import ImageSlider from '../components/ImageSlider'
// import Category from '../components/Category'
// import Navbar from '../components/Navbar'
// import { colors } from '../../assets/color/colors'
// import Burger from '../../assets/burger.svg'

// const HomeMain = () => {
//   return (
//     <View>
      
//        <ImageSlider />
//        <Category />
//        <View style={styles.container}>
//         <View>
//         <Text style={{fontSize:30,color:colors.inactiveColor}}>Plan</Text>
//         <Text style={{fontSize:20,color:colors.inactiveColor}}>Your Needs</Text>
//         <Text style={{fontSize:15,color:colors.inactiveColor}}>With Master’s Known.AI</Text>
//         </View>
//          <Burger size={10}/>
//        </View>
//     </View>
//   )
// }

// export default HomeMain

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal:20,
//   },
 
// })


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageSlider from '../components/ImageSlider';
import Category from '../components/Category';
import { colors } from '../../assets/color/colors';
import Burger from '../../assets/burger.svg'
import Buying from '../../assets/buying.svg'


const HomeMain = () => {
  return (
    <View>
      <ImageSlider />
      <Category />
      <View style={styles.container}>
        <View>
          <Text style={styles.planText}>Plan</Text>
          <Text style={styles.needsText}>Your Needs</Text>
          <Text style={styles.aiText}>With Master’s Known.AI</Text>
        </View>
       <Burger width={150} height={200}/>
      </View>
      <View style={{height:130, backgroundColor:colors.opnColor, position:'relative',borderTopRightRadius:20,borderTopLeftRadius:20}}>
          <Buying width={150} height={250} style={styles.buying}/>
      </View>
    </View>
  );
};

export default HomeMain;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: 'row', // To align SVG and text in a row
    alignItems: 'center', // Vertically center the SVG and text
  },
  buying:{
    position:'absolute',
    top:-100,
  },
  planText: {
    fontSize: 30,
    color: colors.inactiveColor,
  },
  needsText: {
    fontSize: 20,
    color: colors.inactiveColor,
  },
  aiText: {
    fontSize: 15,
    color: colors.inactiveColor,
  },
});
