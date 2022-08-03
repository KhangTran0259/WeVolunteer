import { QuerySnapshot } from 'firebase/firestore'

import React, { Component } from 'react';
import { useState, useEffect } from 'react'
import { Button, StyleSheet, SafeAreaView, View, FlatList, onPress, Text, Pressable, TextInput, Image, TouchableOpacity } from 'react-native'
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query, setData } from "firebase/firestore";
import OutputList from '../components/OutputList';
import { GlobalStyles } from '../constant/style';
import { db } from '../components/config';
import { useNavigation } from '@react-navigation/native';

const Tech = () => {
    const [events, setEvents] = useState([]);

    // const [name, setName] = useState('');
    // const [date, setDate] = useState('');
    // const [address, setAddress] = useState('');
    // const [description, setDescription] = useState('');
    const [state, setState] = React.useState({
        name: "",
        date: "",
        address: "",
        description: "",

    })
    const navigation = useNavigation();
    //submit data
    function create(navigation) {

        addDoc(collection(db, "upcoming"), {
            name: state.name,
            date: state.date,
            address: state.address,
            description: state.description,

        }).then(() => {
            // Data saved successfully!
            console.log('data submitted');

        }).catch((error) => {
            // The write failed...
            console.log(error);


        });


    }
    function cancelHandler() {

        navigation.navigate('Home')


    }

    function add(item) {
        state.name = item.name
        state.date = item.date
        state.address = item.address
        state.description = item.description

        create()
        cancelHandler()



    }




    const getUsers = async () => {
        let result = [];
        const querySnapshot = await getDocs(collection(db, "events"));
        querySnapshot.forEach((doc) => {
            result.push(doc.data());
        });
        setEvents([...result]);
    };
    useEffect(() => {
        getUsers();
    }, []);

    const renderItem = ({ item }) => {

        function handleChange(evt) {
            const value = evt.target.value;
            setState({
                ...state,
                [evt.target.name]: value
            });


        }


        return (
            <View style={styles.container}>
                <View style={styles.button} >
                    <Text >{item.date}</Text>
                    <Text >{item.address}</Text>
                    <Text >{item.name}</Text>
                    <Text >{item.description}</Text>
                    <View style={styles.option}>


                        {/* <TextInput value={state.name} onChange={handleChange} ></TextInput> */}

                        <Pressable onPress={() => add(item)} >

                            <Image

                                source={require('../assets/img/check.png')}
                            />
                        </Pressable>
                        <Pressable onPress={cancelHandler}>
                            <Image

                                source={require('../assets/img/close.png')}
                            />
                        </Pressable>
                    </View>

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
                style={{ height: '100%' }}
                data={events}
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
export default Tech
