// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Imagem Principal (Substitua a URL pela sua imagem local) */}
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e' }} 
        style={styles.heroImage} 
        resizeMode="cover"
      />

      <View style={styles.exploreBanner}>
        <Text style={styles.exploreText}>EXPLORE A ILHA</Text>
      </View>

      {/* Ícones de Navegação Inferiores */}
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="boat-outline" size={32} color="#112D4E" />
          <Text style={styles.iconText}>PASSEIOS NA CALDEIRA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Restaurantes')}>
          <Ionicons name="camera-outline" size={32} color="#112D4E" />
          <Text style={styles.iconText}>PONTOS TURÍSTICOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="restaurant-outline" size={32} color="#112D4E" />
          <Text style={styles.iconText}>PRAIAS E RESTAURANTES</Text>
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
    width: '90%',
    height: 400,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  exploreBanner: {
    backgroundColor: '#5C82A6',
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