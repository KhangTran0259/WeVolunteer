import { QuerySnapshot } from 'firebase/firestore'

import React, { Component } from 'react';
import { useState, useEffect } from 'react'
import { Button, StyleSheet, SafeAreaView, View, FlatList, onPress, Text, Pressable, TextInput, Image, TouchableOpacity } from 'react-native'
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query, setData } from "firebase/firestore";
import OutputList from '../components/OutputList';
import { GlobalStyles } from '../constant/style';
import { db } from '../components/config';
import { useNavigation } from '@react-navigation/native';

const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([]);


    const navigation = useNavigation();
    //submit data





    const getUsers = async () => {
        let result = [];
        const querySnapshot = await getDocs(collection(db, "upcoming"));
        querySnapshot.forEach((doc) => {
            result.push(doc.data());
        });
        setUpcoming([...result]);
    };
    useEffect(() => {
        getUsers();
    }, []);

    const renderItem = ({ item }) => {



        return (
            <View style={styles.container}>
                <View style={styles.button} >

                    <Text >Upcoming Events</Text>
                    <Text >{item.name}</Text>
                    <Text >{item.address}</Text>



                </View>
            </View >
        );
    };



    return (

        // Buttons which pull data from DB
        // Inside button, name will be controlled by state, which will come from DB.
        // Yes / No button, to accept / decline a volunteer job
        <View>
            <FlatList


                data={upcoming}
                numColumns={1}
                renderItem={renderItem}

            // keyExtractor={(item) => item.id}





            />


        </View>


    )

}



const styles = StyleSheet.create({
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
        backgroundColor: '#ffe4b5',

    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',


    }

})
export default Upcoming
