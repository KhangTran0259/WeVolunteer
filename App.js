import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Art from './screens/Art';
import Pet from './screens/Pet';
import Hospital from './screens/Hospital';
import Tech from './screens/Tech';
import Youth from './screens/Youth';
import Event from './screens/Event';
const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      {<Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pet" component={Pet} />
        <Stack.Screen name="Art" component={Art} />
        <Stack.Screen name="Hospital" component={Hospital} />
        <Stack.Screen name="Tech" component={Tech} />
        <Stack.Screen name="Youth" component={Youth} />
        <Stack.Screen name="Event" component={Event} />



      </Stack.Navigator>}

    </NavigationContainer>
  );
}

