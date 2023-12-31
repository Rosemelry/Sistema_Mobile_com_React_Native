import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import CardAtleta from './CardAtleta';
import PainelFavoritos from './PainelFavoritos';
import { Feather } from 'react-native-vector-icons';

const App = () => {
  const [listaJ, setListaJ] = useState([]);
  const [input, setInput] = useState('');
  const [jogador, setJogador] = useState({
    nome: '',
    posicao: '',
    idade: '',
    imagem: '',
  });
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

  const handleSearch = async () => {
    if (input === '') {
      alert('Digite o nome de um jogador');
      return;
    }

    try {
      const keyM = "chave da API";
      const UrlBase = `https://apiv3.apifootball.com/?action=get_players&player_name=${input}&APIkey=${keyM}`;
      const resposta = await fetch(UrlBase);
      const dados = await resposta.json();

      if (dados && dados.length > 0) {
        const jogadorData = {
          nome: dados[0].player_name,
          idade: dados[0].player_age,
          camisa: dados[0].player_number,
          time: dados[0].team_name,
          imagem: dados[0].player_image,
        };
        setJogador(jogadorData);
        setMostrarCard(true);
        setMostrarFavoritos(false);
      } else {
        alert('Jogador não encontrado');
      }
    } catch (err) {
      console.error(err.message);
      alert('Erro ao buscar jogador');
    }
  };

  const handleMostrarFavoritos = () => {
    setMostrarFavoritos(!mostrarFavoritos);
    setMostrarCard(false);
  };

  const handleVoltar = () => {
    setMostrarFavoritos(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscador de Jogador</Text>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Digite o Jogador..."
          value={input}
          onChangeText={(text) => setInput(text)}
          onKeyPress={handleKeyPress}
        />

        <TouchableOpacity style={styles.buttonSearch} onPress={handleSearch}>
          <Feather name="search" size={25} color="#fff" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonFavoritos} onPress={handleMostrarFavoritos}>
          <Feather name="star" size={25} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {mostrarCard && (
        <CardAtleta
          jogador={jogador}
          setMostrarCard={setMostrarCard}
          setInput={setInput}
          listaJ={listaJ}
          setListaJ={setListaJ}
        />
      )}

      {mostrarFavoritos && <PainelFavoritos listaJ={listaJ} onVoltar={handleVoltar} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212b46',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    margin: 20,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    margin: 34,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.5,
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    border: 0, 
    fontSize: 20,
    color: '#fff',
  },
  buttonSearch: {
    backgroundColor: 'transparent',
    border: 0, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginRight: 10,
  },
  buttonFavoritos: {
    backgroundColor: 'transparent',
    border: 0, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transform: [{ scale: 1 }],
    marginLeft: 8,
  },
  icon: {
    borderWidth: 0, 
  },
});

export default App;