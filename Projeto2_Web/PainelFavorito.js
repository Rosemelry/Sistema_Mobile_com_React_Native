import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView, Image } from 'react-native';

function PainelFavoritos({ listaJ, onVoltar }) {
  return (
    <View style={styles.container} id="painelFav">
      <ScrollView contentContainerStyle={styles.favoritosGrid}>
        {listaJ.length < 1 ? (
          <Text>Nenhum jogador Favoritado</Text>
        ) : (
          listaJ.map((el, index) => (
            <View key={index} style={styles.favoritoQuadrado}>
              <Image
                source={{ uri: el.imagem }}
                style={styles.imagemAtleta}
              />
              <Text>Nome: {el.nome.substring(0, 35)}</Text>
              <Text>Time: {el.time}</Text>
              <Text>Numero: {el.numeroC}</Text>
              <Text>Idade: {el.idade}</Text>
            </View>
          ))
        )}
      </ScrollView>
      <View>
        <TouchableOpacity
          style={styles.buttonCard}
          id="voltar"
          onPress={onVoltar}
        >
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoritosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  favoritoQuadrado: {
    width: '65%',
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  imagemAtleta: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  buttonCard: {
    backgroundColor: 'transparent',
    border: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transform: [{ scale: 1 }],
  },
});

export default PainelFavoritos;