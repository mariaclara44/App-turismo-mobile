// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (

    
    <ScrollView style={styles.container}>
      {/* Imagem Principal (Substitua a URL pela sua imagem local) */}
      <Image 
        source={{ uri: 'https://i.pinimg.com/736x/e1/22/35/e122354fe2928ef9915ca9ac61ebc74e.jpg' }} 
        style={styles.heroImage} 
        resizeMode="cover"
      />

      <View style={styles.exploreBanner}>
        <Text style={styles.exploreText}>EXPLORE A ILHA</Text>
      </View>

      {/* Ícones de Navegação Inferiores */}
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Sobre')}>
          <Ionicons name="boat-outline" size={32} color="#112D4E" />
          <Text style={styles.iconText}>SOBRE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Pontos Turísticos')}>
          <Ionicons name="camera-outline" size={32} color="#112D4E" />
          <Text style={styles.iconText}>PONTOS TURÍSTICOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Restaurantes')}>
          <Ionicons name="restaurant-outline" size={32} color="#112D4E" />
          <Text style={styles.iconText}>RESTAURANTES</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroImage: {
    width: '75%',
    height: 400,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  exploreBanner: {
    backgroundColor: '#466a8b',
    marginHorizontal: '5%',
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  exploreText: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  iconButton: {
    alignItems: 'center',
    width: 100,
  },
  iconText: {
    color: '#112D4E',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  }
});