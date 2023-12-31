import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function CardAtleta({
  jogador,
  listaJ,
  setListaJ,
  setInput,
}) {
  const [mensagem, setMensagem] = useState('');

  const favJ = () => {
    const novoAtleta = {
      nome: jogador.nome,
      idade: jogador.idade,
      time: jogador.time,
      numeroC: jogador.camisa,
      imagem: jogador.imagem,
    };
    setListaJ([...listaJ, novoAtleta]);
    setInput('');
    setMensagem('Jogador salvo nos favoritos!');
    setTimeout(() => {
      setMensagem('');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: jogador.imagem }} style={styles.image} />
      <Text style={styles.name}>Nome: {jogador.nome}</Text>
      <Text>Idade: {jogador.idade}</Text>
      <Text>Camisa: {jogador.camisa}</Text>
      <Text>Time: {jogador.time}</Text>
      <TouchableOpacity style={styles.button} onPress={favJ}>
        <Text style={styles.buttonText}>Favoritar Jogador</Text>
      </TouchableOpacity>
      {mensagem && <Text>{mensagem}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#cccccc',
    borderWidth: 2,
    borderColor: '#999999',
    borderRadius: 8,
    padding: '5px 15 px',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default CardAtleta;