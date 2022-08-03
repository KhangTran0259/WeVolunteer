import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home';
import Tech from './screen/Tech';
import Youth from './screen/Youth';
import Hospital from './screen/Hospital';
import Event from './screen/Event';
import Pet from './screen/Pet';
import Art from './screen/Art';
import firestore from '@react-native-firebase/firestore';


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

