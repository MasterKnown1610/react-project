import React, { Profiler } from "react";
import { View, Text, StyleSheet,TouchableOpacity,TextInput} from "react-native";
import { colors } from "../../assets/color/colors";
import LinearGradient from "react-native-linear-gradient";
import Icons from 'react-native-vector-icons/FontAwesome5'

const Navbar = ( ) => {
    return(
        <LinearGradient
        colors={[
            '#d16ba599', '#c777b999', '#ba83ca99', '#aa8fd899', '#9a9ae199',
            '#8aa7ec99', '#79b3f499', '#69bff899', '#52cffe99', '#41dfff99',
            '#46eefa99', '#5ffbf199'
        ]}
        start={{ x: 1, y: 0 }} 
            end={{ x: 0, y: 1 }}  
        style={styles.mainContainer}
      >
      
           <View style={styles.navbarMain}>
            <View>
                <Text style={{color:'#000'}}>Address: Karthikeya</Text>
            </View>
            <TouchableOpacity style={styles.Profile}>
                <Icons name="user-alt" size={15} color={colors.white} />
            </TouchableOpacity>
           </View>
            <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                placeholderTextColor="#888"
        
            />
            <TouchableOpacity>
             <Icons name='search' size={15} color={colors.black}/>
            </TouchableOpacity>
            </View>
        </LinearGradient>
    );

}

const styles = StyleSheet.create({
    navbarMain: {
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems: 'center',
        padding:15,
       
    },
    menuButton : {
        backgroundColor: colors.white,
        borderRadius:100,
        margin: 10, 

    },
    Profile: {
        backgroundColor: colors.primary,
        padding:5,
        borderRadius:50,
       
    },

    searchBar: {
        color: '#000',
        fontSize:14,
      },
      searchContainer:{
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        marginHorizontal:10,
        height:40,
      },
      mainContainer:{
        paddingBottom:30,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
      }
      
})
export default Navbar