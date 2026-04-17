// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importe as telas que vamos criar
import HomeScreen from './Screens/HomeScreen';
import ListScreen from './Screens/ListScreen';
// import AboutScreen from './screens/AboutScreen';
// import ContactScreen from './screens/ContactScreen';

const Drawer = createDrawerNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#5C82A6' },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  drawerStyle: { backgroundColor: '#5C82A6' },
  drawerActiveTintColor: '#fff',
  drawerInactiveTintColor: '#d3d3d3',
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Início" screenOptions={globalScreenOptions}>
        <Drawer.Screen name="Início" component={HomeScreen} options={{ title: 'SANTORINI' }} />
        <Drawer.Screen name="Restaurantes" component={ListScreen} />
        {/* Adicione as outras telas aqui depois */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}