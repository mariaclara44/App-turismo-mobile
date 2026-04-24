// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native'; // Importe o TouchableOpacity
import { Ionicons } from '@expo/vector-icons';   // Importe os ícones

import HomeScreen from './src/Screens/HomeScreen';
import ListaRestaurantes from './src/Screens/ListaRestaurantes';
import ListaPontosTuristicos from './src/Screens/ListaPontosTuristicos';
import Sobre from './src/Screens/SobreScreen';
import Contato from './src/Screens/ContatoScreen';


const Drawer = createDrawerNavigator();

const globalScreenOptions = {
  headerStyle: { 
    backgroundColor: '#466a8b',
    elevation: 0, // Remove sombra no Android
    shadowOpacity: 0, // Remove sombra no iOS
  },
  headerTintColor: '#fff',
  
  // 1. TIRA A ESCRITA "INÍCIO"
  headerTitle: '', 
  
  // 2. ADICIONA A LUPA NO CANTO DIREITO
  headerRight: () => (
    <TouchableOpacity 
      onPress={() => console.log('Busca clicada')} 
      style={{ marginRight: 15 }}
    >
      <Ionicons name="search" size={24} color="white" />
    </TouchableOpacity>
  ),

  headerTitleAlign: 'center',
  drawerStyle: { backgroundColor: '#466a8b' },
  drawerActiveTintColor: '#fff',
  drawerInactiveTintColor: '#d3d3d3',
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Início" screenOptions={globalScreenOptions}>
        <Drawer.Screen name="Início" component={HomeScreen} />
        <Drawer.Screen name="Restaurantes" component={ListaRestaurantes} />
        <Drawer.Screen name="Pontos Turísticos" component={ListaPontosTuristicos} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen name="Contato" component={Contato} />
      
      
      </Drawer.Navigator>
    </NavigationContainer>
  );
}