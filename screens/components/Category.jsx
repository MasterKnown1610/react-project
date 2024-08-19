// // import { View, Text, StyleSheet } from 'react-native'
// // import React from 'react'

// // const Category = () => {
// //     const categoryData = [
// //         { id: 1, name: 'Category 1' },
// //         { id: 2, name: 'Category 2' },
// //         { id: 3, name: 'Category 3' },
// //         { id: 4, name: 'Category 4' },
// //     ]
// //   return (
// //     <View style={styles.mainContainer}>
// //       {categoryData && categoryData.map((data) => (
// //         <View key={data.id} style={styles.category}>
// //             <Text style={{color:'white'}}>{data.name}</Text>
// //         </View>
// //       ))}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //     mainContainer : {
// //         backgroundColor:'red',
        

// //     },
// //     category :{

// //         backgroundColor:'blue',
// //         width:'50%',

// //     }
// // })
// // export default Category;

// // with wrap
// // import { View, Text, StyleSheet } from 'react-native';
// // import React from 'react';

// // const Category = () => {
// //     const categoryData = [
// //         { id: 1, name: 'Category 1' },
// //         { id: 2, name: 'Category 2' },
// //         { id: 3, name: 'Category 3' },
// //         { id: 4, name: 'Category 4' },
// //     ];

// //     return (
// //         <View style={styles.mainContainer}>
// //             {categoryData.map((data) => (
// //                 <View key={data.id} style={styles.category}>
// //                     <Text style={styles.categoryText}>{data.name}</Text>
// //                 </View>
// //             ))}
// //         </View>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     mainContainer: {
// //         flexDirection: 'row',   // Arrange items in a row
// //         flexWrap: 'wrap',       // Wrap items to the next line
// //         backgroundColor: 'red',
// //     },
// //     category: {
// //         backgroundColor: 'blue',
// //         width: '40%',           // Each item takes up 50% of the container width
// //         margin: 10,
// //         alignItems: 'center',   // Center content horizontally
// //         justifyContent: 'center', // Center content vertically
// //     },
// //     categoryText: {
// //         color: 'white',
// //     }
// // });

// // export default Category;


// import { View, Text, FlatList, StyleSheet,Image } from 'react-native';
// import React from 'react';
// import cg1 from '../../assets/category/cg1.png';
// import accessories from '../../assets/category/accessories.png';
// import basket from '../../assets/category/basket.png';
// import book from '../../assets/category/book.png';
// import gift from '../../assets/category/gift.png';
// import veg from '../../assets/category/veg.png';

// const Category = () => {
//     const categoryData = [
//         { id: 1, name: 'Category 1' ,img:cg1},
//         { id: 2, name: 'Category 2' ,img:accessories},
//         { id: 3, name: 'Category 3' ,img:basket},
//         { id: 4, name: 'Category 4' ,img:book},
//         { id: 5, name: 'Category 3' ,img:gift},
//         { id: 6, name: 'Category 4' ,img:veg},
//     ];

//     const renderItem = ({ item }) => (
//         <View style={styles.category} alt={item.name}>
//              <Image source={item.img} />
//             <Text style={styles.categoryText}>{item.name}</Text>
            
//         </View>
//     );

//     return (
//         <FlatList
//             data={categoryData}
//             renderItem={renderItem}
//             keyExtractor={item => item.id.toString()}
//             numColumns={2}  // Set the number of columns
//             contentContainerStyle={styles.mainContainer}
//         />
//     );
// };

// const styles = StyleSheet.create({
//     mainContainer: {
//         // backgroundColor: 'red',
//         marginTop:15,
//     },
//     category: {
//         backgroundColor: 'blue',
//         width:'50%',
//         height : 132,
//         flex: 1,           // Each item takes up equal space
//         margin: 15,         // Space between items
//         // padding: 10,
//         borderRadius:25,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     categoryText: {
//         color: 'white',
//     }
// });

// export default Category;




import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import cg1 from '../../assets/category/cg1.png';
import accessories from '../../assets/category/accessories.png';
import basket from '../../assets/category/basket.png';
import book from '../../assets/category/book.png';
import gift from '../../assets/category/gift.png';
import veg from '../../assets/category/veg.png';
import { colors } from '../../assets/color/colors';

const Category = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.row}>
                <View style={styles.category}>
                    <Image source={cg1} style={styles.image} />
                    <Text style={styles.categoryText}>Offer Zone %</Text>
                </View>
                <View style={styles.category}>
                    <Image source={accessories} style={styles.image} />
                    <Text style={styles.categoryText}>Category 2</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.category}>
                    <Image source={basket} style={styles.image} />
                    <Text style={styles.categoryText}>Category 3</Text>
                </View>
                <View style={styles.category}>
                    <Image source={book} style={styles.image} />
                    <Text style={styles.categoryText}>Category 4</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.category}>
                    <Image source={gift} style={styles.image} />
                    <Text style={styles.categoryText}>Category 5</Text>
                </View>
                <View style={styles.category}>
                    <Image source={veg} style={styles.image} />
                    <Text style={styles.categoryText}>Category 6</Text>
                </View>
            </View>
            



            <View style={styles.row}>
                <View style={styles.category}>
                    <Image source={gift} style={styles.image} />
                    <Text style={styles.categoryText}>Category 5</Text>
                </View>
                <View style={styles.category}>
                    <Image source={veg} style={styles.image} />
                    <Text style={styles.categoryText}>Category 6</Text>
                </View>
            </View>


            <View style={styles.row}>
                <View style={styles.category}>
                    <Image source={gift} style={styles.image} />
                    <Text style={styles.categoryText}>Category 5</Text>
                </View>
                <View style={styles.category}>
                    <Image source={veg} style={styles.image} />
                    <Text style={styles.categoryText}>Category 6</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 15,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    category: {
        position:'relative',
        backgroundColor: colors.opnColor,
        width: '48%',  // Adjust width to fit two items per row
        height: 132,
        borderRadius: 25,
        padding:10,
        
    },
    image: {
        width: '70%',
        height: '80%',
        borderRadius: 25,
        position:'absolute',
        bottom:0,
        right:0,
    },
    categoryText: {
        color: 'white',
        marginTop: 10,
    },
});

export default Category;
