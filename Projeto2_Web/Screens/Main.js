import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import { useNavigation} from '@react-navigation/native';

export default function Main() {

  const navigtion=useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Buscador Jogador</Text>
      <TouchableHighlight style={styles.formButton} onPress={()=> navigtion.navigate('HomeTela')}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212b46',
    justifyContent:"center"
  },
  formTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    margin: 10,
  },
  formButton: {
    backgroundColor: '#fff',
    width: '20%',
    margin: 50,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    color:"#212b46"
  },
  textButton: {
    color:"#212b46",
    fontSize: 15,
    fontWeight: 'bold',
  }
});