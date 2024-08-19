
// import React from 'react';
// import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
// import Navbar from './components/Navbar';
// import ImageSlider from './components/ImageSlider';
// import { colors } from '../assets/color/colors';
// import Category from './components/Category';
// import DownNav from './components/DownNav';

// const Home = () => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.topContainer}>
//                 <Navbar />
//                 <Text>Karthikeya</Text>
//                 <View style={styles.emptyBg} />
//                 <ScrollView contentContainerStyle={styles.scrollContainer}>
//                    <HomeMain/>
//                    <Love/>
//                    <Store/>
//                    <List/>
//                    <Cart/>
//                 </ScrollView>
//             </View>
//             <DownNav style={styles.downNav} />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor: 'blue',
//     },
//     topContainer: {
//         flex: 1,
//     },
//     scrollContainer: {
//         flexGrow: 1,
//         paddingBottom: 80, // Adjust this padding based on the height of DownNav
//     },
//     emptyBg: {
//         height: 136,
//         borderBottomLeftRadius: 50,
//         borderBottomRightRadius: 50,
//         width: '100%',
//         position: 'absolute',
//         zIndex: -1,
//         backgroundColor: colors.bgColor,
//     },
//     downNav: {
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//     }
// });

// export default Home;



import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import Navbar from './components/Navbar';
import { colors } from '../assets/color/colors';
import DownNav from './components/DownNav';
import HomeMain from './mainScreens/HomeMain';
import Love from './mainScreens/Love';
import List from './mainScreens/List';
import Cart from './mainScreens/Cart';
import Store from './mainScreens/Store';
import AI from './ai/Ai';

const Home = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('home'); // Default active tab

    // Function to handle tab changes
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Navbar />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                   
                    {/* Render components based on the active tab */}
                    {activeTab === 'home' && <HomeMain />}
                    {activeTab === 'favorite' && <Love />}
                    {activeTab === 'store' && <Store />}
                    {activeTab === 'list' && <List />}
                    {activeTab === 'cart' && <Cart />}
                </ScrollView>
            </View>
            <DownNav 
                style={styles.downNav} 
                onTabChange={handleTabChange} // Pass handleTabChange to DownNav
            />
            <AI/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        // paddingBottom: 80, // Adjust this padding based on the height of DownNav
        paddingTop:10,
    },
    emptyBg: {
        height: 136,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: '100%',
        position: 'absolute',
        zIndex: -1,
        backgroundColor: colors.bgColor,
    },
    downNav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    }
});

export default Home;
