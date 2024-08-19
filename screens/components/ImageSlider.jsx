

import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { colors } from "../../assets/color/colors";

const ImageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef(null);
    const numSlides = 3; // Number of slides
    const slideWidth = 320; // Width of each slide
    const scrollTimeoutRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            let newIndex = (activeIndex + 1) % numSlides;
            setActiveIndex(newIndex);
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({ x: newIndex * slideWidth, animated: true });
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleScroll = (event) => {
        event.persist(); // Persist the event to prevent it from being reset

        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }


        scrollTimeoutRef.current = setTimeout(() => {
            const contentOffsetX = event.nativeEvent.contentOffset.x;
            const newIndex = Math.round(contentOffsetX / slideWidth);

            // Ensure the active index is updated only when it changes
            if (newIndex !== activeIndex && newIndex >= 0 && newIndex < numSlides) {
                setActiveIndex(newIndex);
            }
        }, 50); // Adding a slight delay to smooth out the updates
    };

    return (
        <View style={styles.container}>
            <ScrollView 
                horizontal 
                pagingEnabled 
                onScroll={handleScroll} 
                showsHorizontalScrollIndicator={false}
                ref={scrollViewRef}
                contentContainerStyle={styles.scrollViewContent} // Updated this line
                scrollEventThrottle={16}
            >
                <View style={[styles.slide, { backgroundColor: colors.opnColor }]}></View>
                <View style={[styles.slide, { backgroundColor: colors.opnColor }]}></View>
                <View style={[styles.slide, { backgroundColor: colors.opnColor }]}></View>
            </ScrollView>
            <View style={styles.indicatorContainer}>
                {Array.from({ length: numSlides }).map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            {width: index === activeIndex ? 18 : 10},
                            { backgroundColor: index === activeIndex ? '#161488' : '#ccc' }
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewContent: {
        paddingHorizontal: 10, // Adjust padding if needed to center slides
    },
    scrollView: {
        height: 180,
    },
    slide: {
        width: 320, // Keep this consistent with slideWidth
        height: 130,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    indicatorContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    indicator: {
        
        height: 5,
        borderRadius: 5,
        margin: 5,
    },
});

export default ImageSlider;
