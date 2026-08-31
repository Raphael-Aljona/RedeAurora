import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, StatusBar, Image } from 'react-native';
import { router } from 'expo-router';

export default function Splash() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    Animated.sequence([
      // 1. Fade In + Zoom In
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 6,
          useNativeDriver: true,
        }),
      ]),

      // 2. Tempo de espera com a logo na tela
      Animated.delay(1200),

      // 3. Fade Out + Zoom Out
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.9,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      // 4. Redireciona diretamente para a tela de login ao finalizar
      router.replace('/login');
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#F06A22" />

      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Image
          source={require('../../../assets/imgs/LogoAurora.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <Animated.Text style={styles.title}>Rede Aurora</Animated.Text>
        <Animated.Text style={styles.subtitle}>
          Sua solução rápida e prática
        </Animated.Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F06A22',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
    opacity: 0.9,
  },
});