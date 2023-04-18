import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet, List } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  
  const Lista = ({ item }) => {
    const { Ajudante, Valor, Disponibilidade, Especialidade } = item;

    return (
      <TouchableOpacity
        style={styles.Caixainf}
        onPress={() => (Ajudante, Valor, Disponibilidade, Especialidade)}
      >
        <Ionicons name="person-circle" size={40} color="#333" style={styles.icone} />
        <View style={styles.TextoContainer}>
          <Text style={styles.Texto}>{`Ajudante: ${Ajudante}`}</Text>
          <Text style={styles.Texto}>{`Valor: ${Valor}`}</Text>
          <Text style={styles.Texto}>{`Dias Disponíveis: ${Disponibilidade}`}</Text>
          <Text style={styles.Texto}>{`Especialidade: ${Especialidade}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.Containerstyle}>
        <Text style={styles.Titulo}>Informações dos Assistentes</Text>
        <FlatList
          data={[
            { Ajudante: 'Breno Silva', Valor: '60 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/XX', Especialidade: 'Deficientes Visuais' },
            { Ajudante: 'Ronaldo Alberto', Valor: '80 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/XX', Especialidade: 'Deficientes Fisicos' },
            { Ajudante: 'Maria do Socorro', Valor: '75 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Auditivos' },
            { Ajudante: 'Rosangela Almeida', Valor: '90 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Intelectuais' },
            { Ajudante: 'Tati Freitas', Valor: '70 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Psicossociais' },
            { Ajudante: 'Bianca Lima', Valor: '100 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Multiplos   (Visuais e Fisicos)' },
            { Ajudante: 'Leda Ochoa', Valor: '110 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Multiplos   (Intelectuais e Psicossosiais)' },
            { Ajudante: 'Maria Clara', Valor: '60 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Auditivos' },
            { Ajudante: 'Fernando Pessoa', Valor: '85 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Visuais' },
          ]}
          renderItem={Lista}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  Containerstyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  Titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 56,
    padding: 20,
  },
  Caixainf: {
    backgroundColor: '#efefef',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icone: {
    marginRight: 10,
  },
  TextoContainer: {
    flex: 1,
  },
  Texto: {
    fontSize: 16,
    color: '#333',
  },
});