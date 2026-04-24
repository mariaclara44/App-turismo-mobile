// screens/ListScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Importe o componente Card que você acabou de criar
import Card from '../components/Card'; 

const DATA = [
  { id: '1', title: 'AMOUDI BAY', image: 'https://i.pinimg.com/736x/05/1a/14/051a1469c47baa820183a38d7e70ce67.jpg'},
  { id: '2', title: 'THE ATHENIAN HOUSE', image: 'https://santorinidave.com/wp-content/uploads/2020/08/santorini-athenian-house-sunset.jpg' },
  { id: '3', title: 'BEEFBBAR SANTORINI', image: 'https://i.pinimg.com/736x/b8/e7/ce/b8e7ceb8b161e3bc7c08f7d992a5643a.jpg' },
  { id: '4', title: 'FIVE SENSES', image: 'https://i.pinimg.com/736x/9a/d4/a3/9ad4a3e2acaa62b6b8c7cf80f4f6f325.jpg' },
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