// screens/ListScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Importe o componente Card que você acabou de criar
import Card from '../components/Card'; 

const DATA = [
  { id: '1', title: 'AMOUDI BAY', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5f1' },
  { id: '2', title: 'THE PENGUIN HOUSE', image: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a' },
  { id: '3', title: 'SUNSET TAVERNA', image: 'https://images.unsplash.com/photo-1516483638261-f40af5ff1f25' },
  { id: '4', title: 'FIRA RESTAURANT', image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca' },
];

export default function ListScreen({ navigation }) {
  
  // Agora a função renderItem fica muito mais limpa
  const renderItem = ({ item }) => (
    <Card 
      title={item.title} 
      imageUrl={item.image} 
      onPress={() => console.log(`Navegar para detalhes de: ${item.title}`)} 
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBanner}>
        <Text style={styles.headerText}>RESTAURANTES</Text>
      </View>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerBanner: {
    backgroundColor: '#5C82A6',
    margin: 20,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  headerText: { color: '#fff', fontWeight: 'bold' },
  listContainer: { paddingHorizontal: 10 },
});