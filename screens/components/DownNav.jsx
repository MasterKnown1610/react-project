// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Icons from 'react-native-vector-icons/Entypo';
// import Like from 'react-native-vector-icons/MaterialIcons';
// import Store from 'react-native-vector-icons/FontAwesome5';
// import List from 'react-native-vector-icons/FontAwesome6';
// import { colors } from '../../assets/color/colors';

// const DownNav = () => {
//   const [activeTab, setActiveTab] = useState('home'); // Default active tab

//   const handlePress = (tab) => {
//     setActiveTab(tab); 
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => handlePress('home')} style={styles.button}>
//         <Icons
//           name="home"
//           size={24}
//           color={activeTab === 'home' ? colors.activeColor : colors.inactiveColor}
//         />
//         <Text style={[styles.textStyles, { color: activeTab === 'home' ? colors.activeColor : colors.inactiveColor }]}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => handlePress('favorite')} style={styles.button}>
//         <Like
//           name="favorite"
//           size={24}
//           color={activeTab === 'favorite' ? colors.activeColor : colors.inactiveColor}
//         />
//          <Text style={[styles.textStyles, { color: activeTab === 'favorite' ? colors.activeColor : colors.inactiveColor }]}>
//   Love
// </Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => handlePress('store')} style={styles.button}>
//         <Store
//           name="store"
//           size={24}
//           color={activeTab === 'store' ? colors.activeColor : colors.inactiveColor}
//         />
//          <Text style={[styles.textStyles, { color: activeTab === 'store' ? colors.activeColor : colors.inactiveColor }]}>store</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => handlePress('list')} style={styles.button}>
//         <List
//           name="list-check"
//           size={24}
//           color={activeTab === 'list' ? colors.activeColor : colors.inactiveColor}
//         />
//          <Text style={[styles.textStyles, { color: activeTab === 'list' ? colors.activeColor : colors.inactiveColor }]}>List</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => handlePress('cart')} style={styles.button}>
//         <Store
//           name="cart-arrow-down"
//           size={24}
//           color={activeTab === 'cart' ? colors.activeColor : colors.inactiveColor}
//         />
//          <Text style={[styles.textStyles, { color: activeTab === 'cart' ? colors.activeColor : colors.inactiveColor }]}>Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default DownNav;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.bgBtNav,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//   },
//   button:{
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     gap:2,
//   },
//   textStyles:{
//     fontSize:10,
//     fontFamily:'Inter'
//   }
// });




import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import Like from 'react-native-vector-icons/MaterialIcons';
import Store from 'react-native-vector-icons/FontAwesome5';
import List from 'react-native-vector-icons/FontAwesome6';
import { colors } from '../../assets/color/colors';

const DownNav = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('home'); // Default active tab

  const handlePress = (tab) => {
    setActiveTab(tab);
    onTabChange(tab); // Notify Home component of the tab change
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress('home')} style={styles.button}>
        <Icons
          name="home"
          size={24}
          color={activeTab === 'home' ? colors.activeColor : colors.inactiveColor}
        />
        <Text style={[styles.textStyles, { color: activeTab === 'home' ? colors.activeColor : colors.inactiveColor }]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('favorite')} style={styles.button}>
        <Like
          name="favorite"
          size={24}
          color={activeTab === 'favorite' ? colors.activeColor : colors.inactiveColor}
        />
        <Text style={[styles.textStyles, { color: activeTab === 'favorite' ? colors.activeColor : colors.inactiveColor }]}>Love</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('store')} style={styles.button}>
        <Store
          name="store"
          size={24}
          color={activeTab === 'store' ? colors.activeColor : colors.inactiveColor}
        />
        <Text style={[styles.textStyles, { color: activeTab === 'store' ? colors.activeColor : colors.inactiveColor }]}>Store</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('list')} style={styles.button}>
        <List
          name="list-check"
          size={24}
          color={activeTab === 'list' ? colors.activeColor : colors.inactiveColor}
        />
        <Text style={[styles.textStyles, { color: activeTab === 'list' ? colors.activeColor : colors.inactiveColor }]}>List</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('cart')} style={styles.button}>
        <Store
          name="cart-arrow-down"
          size={24}
          color={activeTab === 'cart' ? colors.activeColor : colors.inactiveColor}
        />
        <Text style={[styles.textStyles, { color: activeTab === 'cart' ? colors.activeColor : colors.inactiveColor }]}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DownNav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgBtNav,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  textStyles: {
    fontSize: 10,
    fontFamily: 'Inter',
  }
});
