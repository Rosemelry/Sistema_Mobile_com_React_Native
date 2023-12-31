import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';
import HomeTela from './HomeTela';

export default function navigation() {
    const Stack=createNativeStackNavigator();
return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="HomeTela" component={HomeTela} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}