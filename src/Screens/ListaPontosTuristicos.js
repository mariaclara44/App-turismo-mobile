// screens/ListScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Importe o componente Card que você acabou de criar
import Card from '../components/Card'; 

const DATA = [
  { id: '1', title: 'VULCÃO EM SANTORINI', image: 'https://i.pinimg.com/736x/25/6d/76/256d762e2437bde3694aa98114986bed.jpg' },
  { id: '2', title: 'CATEDRAL SÃO JOÃO B. ', image: 'https://i.pinimg.com/1200x/cb/0a/3b/cb0a3b434f1d5c6f8a91f271806907ef.jpg' },
  { id: '3', title: 'VILA OIA', image: 'https://i.pinimg.com/736x/de/15/16/de1516e0d6f2395cc4c1fe6fedf64dd3.jpg' },
  { id: '4', title: 'SÍTIO AKROTIRI', image: 'https://i.pinimg.com/1200x/d6/31/3a/d6313a1271fafa67cdcc8539f5267bec.jpg' },
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
        <Text style={styles.headerText}>PONTOS TURÍSTICOS</Text>
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