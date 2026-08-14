import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/imgs/LogoAurora.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.testeText}>show de bolas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  testeText: {
    marginTop: 20,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
