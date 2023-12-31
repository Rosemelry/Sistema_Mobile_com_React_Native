import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function AtletaFavorito({ atleta }) {
  return (
    <View style={styles.atletaFavorito}>
      <Image source={{ uri: atleta.imagem }} style={styles.atletaImage} />
      <View style={styles.atletaInfo}>
        <Text style={styles.atletaNome}>{atleta.nome}</Text>
        <Text>Time: {atleta.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  atletaFavorito: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  atletaImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  atletaInfo: {
    marginLeft: 20,
  },
  atletaNome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AtletaFavorito;