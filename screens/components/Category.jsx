
// import { View, Text, StyleSheet, Image } from 'react-native';
// import React from 'react';
// import cg1 from '../../assets/category/cg1.png';
// import accessories from '../../assets/category/accessories.png';
// import basket from '../../assets/category/basket.png';
// import book from '../../assets/category/book.png';
// import gift from '../../assets/category/gift.png';
// import veg from '../../assets/category/veg.png';
// import { colors } from '../../assets/color/colors';

// const Category = () => {
//     return (
//         <View style={styles.mainContainer}>
//             <View style={styles.row}>
//                 <View style={styles.category}>
//                     <Image source={cg1} style={styles.image} />
//                     <Text style={styles.categoryText}>Offer Zone %</Text>
//                 </View>
//                 <View style={styles.category}>
//                     <Image source={accessories} style={styles.image} />
//                     <Text style={styles.categoryText}>Category 2</Text>
//                 </View>
//             </View>
//             <View style={styles.row}>
//                 <View style={styles.category}>
//                     <Image source={basket} style={styles.image} />
//                     <Text style={styles.categoryText}>Category 3</Text>
//                 </View>
//                 <View style={styles.category}>
//                     <Image source={book} style={styles.image} />
//                     <Text style={styles.categoryText}>Category 4</Text>
//                 </View>
//             </View>
//             <View style={styles.row}>
//                 <View style={styles.category}>
//                     <Image source={gift} style={styles.image} />
//                     <Text style={styles.categoryText}>Category 5</Text>
//                 </View>
//                 <View style={styles.category}>
//                     <Image source={veg} style={styles.image} />
//                     <Text style={styles.categoryText}>Category 6</Text>
//                 </View>
//             </View>
            



//             <View style={styles.row}>
//                 <View style={styles.category}>
//                     <Image source={gift} style={styles.image} />
//                     <Text style={styles.categoryText}>Category 5</Text>
//                 </View>
//                 <View style={styles.category}>
//                     <Image source={veg} style={styles.image} />
//                     <Text style={styles.categoryText}>Category 6</Text>
//                 </View>
//             </View>


//             <View style={styles.row}>
//                 <View style={styles.category}>
//                     <Image source={gift} style={styles.image} />
//                     <Text style={styles.categoryText}>Category 5</Text>
//                 </View>
//                 <View style={styles.category}>
//                     <Image source={veg} style={styles.image} />
//                     <Text style={styles.categoryText}>Category 6</Text>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     mainContainer: {
//         marginTop: 15,
//         paddingHorizontal: 10,
//     },
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 15,
//     },
//     category: {
//         position:'relative',
//         backgroundColor: colors.opnColor,
//         width: '48%',  // Adjust width to fit two items per row
//         height: 132,
//         borderRadius: 25,
//         padding:10,
        
//     },
//     image: {
//         width: '70%',
//         height: '80%',
//         borderRadius: 25,
//         position:'absolute',
//         bottom:0,
//         right:0,
//     },
//     categoryText: {
//         color: 'white',
//         marginTop: 10,
//     },
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


const data = [
    { id: 1, name: "Fresh Produce", image: veg },
    { id: 2, name: "Dairy Products", image: cg1 },
    { id: 3, name: "Bakery", image: basket },
    { id: 4, name: "Shringar and Mehendi", image: accessories },
    { id: 5, name: "Pooja Needs", image: gift },
    { id: 6, name: "Fasting Essentials", image: book },
    { id: 7, name: "Indian Sweets", image: veg },
    { id: 8, name: "Makeup Corner", image: accessories },
    { id: 9, name: "Fruits and Vegetables", image: veg },
    { id: 10, name: "Ice Creams and Frozen Desserts", image: cg1 },
    { id: 11, name: "Dry Fruits and Dates", image: basket },
    { id: 12, name: "Atta, Rice and Dal", image: book },
    { id: 13, name: "Oil, Ghee and Masala", image: gift },
    { id: 14, name: "Dry Fruits", image: basket },
    { id: 15, name: "Chips and Namkeen", image: accessories },
    { id: 16, name: "Sweets and Chocolates", image: veg },
    { id: 17, name: "Drinks and Juices", image: cg1 },
    { id: 18, name: "Tea and Coffee", image: book },
    { id: 19, name: "Instant Food", image: gift },
    { id: 20, name: "Sauces", image: basket },
    { id: 21, name: "Bath and Body", image: accessories },
    { id: 22, name: "Hair", image: cg1 },
    { id: 23, name: "Skin and Face", image: veg },
    { id: 24, name: "Feminine Hygiene", image: gift },
    { id: 25, name: "Baby Care", image: book },
    { id: 26, name: "Health and Pharma", image: accessories },
    { id: 27, name: "Home and Lifestyle", image: basket },
    { id: 28, name: "Cleaners and Repellents", image: gift },
    { id: 29, name: "Electronics", image: cg1 },
    { id: 30, name: "Stationery and Games", image: book }
];

const Category = () => {
    return (
        <View style={styles.mainContainer}>
            {data.map((item) => (
                <View style={styles.category} key={item.id}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.categoryText}>{item.name}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15,
        paddingHorizontal: 10,
    },
    category: {
        backgroundColor: colors.opnColor,
        width: '45%', // Adjust width to fit two items per row
        height: 132,
        borderRadius: 25,
        padding: 10,
        marginBottom: 15, // Space between rows
        marginHorizontal: '2%', // Small margin to create space between columns
    },
    image: {
        width: '70%',
        height: '80%',
        borderRadius: 25,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    categoryText: {
        color: 'white',
        marginTop: 10,
    },
});

export default Category;
