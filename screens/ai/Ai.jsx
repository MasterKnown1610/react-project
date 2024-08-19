import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Animated, TouchableOpacity } from 'react-native';
import Bot from '../../assets/Bot.png';
import { colors } from '../../assets/color/colors';
import LinearGradient from 'react-native-linear-gradient';

const Ai = () => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -5,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 5,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [bounceAnim]);

  return (
    <LinearGradient
      colors={[colors.gradient.start, colors.gradient.middle, colors.gradient.end]}
      locations={colors.gradient.stops} // Percentage stops for the gradient
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Animated.View
            style={[
              styles.imageContainer,
              {
                transform: [{ translateY: bounceAnim }],
              },
            ]}
          >
            <Image
              source={Bot}
              style={styles.image}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1, // Ensures the gradient covers the full screen
    position: 'absolute',
    bottom: 80,
    right: 10,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 5,
    width: 50,
    height: 50,
    // backgroundColor: '#000', // Optional background color for button
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Ai;
