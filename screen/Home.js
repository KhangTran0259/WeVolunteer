
import { QuerySnapshot } from 'firebase/firestore'

import React, { Component } from 'react';
import { useState, useEffect } from 'react'
import { Button, StyleSheet, SafeAreaView, View, FlatList, onPress, Text, Pressable, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query, setData } from "firebase/firestore";
import OutputList from '../components/OutputList';
import { GlobalStyles } from '../constant/style';
import { db } from '../components/config';
import { useNavigation } from '@react-navigation/native';
import Upcoming from './Upcoming';

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
                <Image style={page.icon}
                    source={require('../assets/img/Pet.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={page.button}>
                <Text onPress={() =>
                    navigation.navigate('Youth', { name: 'Jane' })
                }>

                    Children & Youth

                </Text>
                <Image style={page.icon}
                    source={require('../assets/img/Youth.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={page.button}>
                <Text onPress={() =>
                    navigation.navigate('Art', { name: 'Jane' })
                }>

                    Art & Culture

                </Text>
                <Image style={page.icon}
                    source={require('../assets/img/Art.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={page.button}>
                <Text onPress={() =>
                    navigation.navigate('Tech', { name: 'Jane' })
                }>

                    Techology

                </Text>
                <Image style={page.icon}
                    source={require('../assets/img/Tech.png')}
                />
            </TouchableOpacity>
            {/* <TouchableOpacity style={page.button}>
                <Text onPress={() =>
                    navigation.navigate('Hospital', { name: 'Jane' })
                }>
                    Hospital
                </Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={page.button}>

                <Text onPress={() =>
                    navigation.navigate('Event', { name: 'Jane' })
                }>
                    Add Event
                </Text>

            </TouchableOpacity>

            <Upcoming />


        </View>



    )


}

const page = StyleSheet.create({
    container: {
        // justifyContent: 'center',
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
    icon: {

        height: 20,
        width: 20,

    },
    img: {
        width: 100,
        height: 100,
    },




});

export default Home