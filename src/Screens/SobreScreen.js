import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SobreScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
      {/* Seção 1: SOBRE */}
      <View style={styles.sectionHeader}>
        <Ionicons name="pencil-outline" size={20} color="white" style={{ marginRight: 8 }} />
        <Text style={styles.headerText}>SOBRE</Text>
      </View>

      <View style={styles.darkCard}>
        <Text style={styles.cardText}>
          A Santorini Getaways Travel nasceu com a missão de oferecer uma perspectiva diferente sobre o turismo em Santorini. Nosso objetivo é proporcionar experiências de alta qualidade que destacam tanto os pontos turísticos clássicos quanto os tesouros escondidos da ilha, preservando sua herança e beleza natural.
        </Text>
      </View>

      {/* Seção 2: POR QUE VIAJAR CONOSCO? */}
      <View style={[styles.sectionHeader, { marginTop: 25 }]}>
        <Ionicons name="star" size={20} color="white" style={{ marginRight: 8 }} />
        <Text style={styles.headerText}>POR QUE VIAJAR CONOSCO?</Text>
      </View>

      <View style={styles.darkCard}>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            <Text style={styles.boldText}>• Guias Especializados: </Text>
            Tours realizados em inglês (ou outros idiomas sob consulta) com profundo conhecimento local.
          </Text>
        </View>

        <View style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            <Text style={styles.boldText}>• Conveniência: </Text>
            Serviço de busca (pick-up) e desembarque (drop-off) na maioria dos hotéis da ilha.
          </Text>
        </View>

        <View style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            <Text style={styles.boldText}>• Flexibilidade: </Text>
            Opções de meio dia ou dia inteiro, adaptando-se ao seu ritmo de viagem.
          </Text>
        </View>

        <View style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            <Text style={styles.boldText}>• Foco na Qualidade: </Text>
            Grupos reduzidos para uma imersão real na cultura grega.
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  sectionHeader: {
    backgroundColor: '#466a8b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  darkCard: {
    backgroundColor: '#112D4E',
    borderRadius: 25,
    padding: 25,
  },
  cardText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'left',
  },
  bulletItem: {
    marginBottom: 15,
  },
  bulletText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});