import React from 'react'
import { Button, StyleSheet, View, Image, TouchableOpacity, onPress, Text } from 'react-native'


function Home({ navigation }) {
    return (
        <View style={page.container}>

            <Image style={page.img}
                source={require('../assets/img/H1.png')}
            />
            <TouchableOpacity style={page.button}>
                <Text onPress={() =>
                    navigation.navigate('Pet', { name: 'Jane' })
                }>
                    Pet
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={page.button}>
                <Text onPress={() =>
                    navigation.navigate('Youth', { name: 'Jane' })
                }>
                    Children & Youth
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={page.button}>
                <Text onPress={() =>
                    navigation.navigate('Art', { name: 'Jane' })
                }>
                    Art & Culture
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={page.button}>
                <Text onPress={() =>
                    navigation.navigate('Tech', { name: 'Jane' })
                }>
                    Techology
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={page.button}>
                <Text onPress={() =>
                    navigation.navigate('Hospital', { name: 'Jane' })
                }>
                    Hospital
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={page.button}>

                <Text onPress={() =>
                    navigation.navigate('Event', { name: 'Jane' })
                }>
                    Add Event
                </Text>
            </TouchableOpacity>





        </View>
    )


}
const page = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        width: 300,
        marginBottom: 20,
        elevation: 3,
        backgroundColor: '#7fffd4',

    },

});

export default Home