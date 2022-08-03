import React, { useState } from 'react'
import { Button, StyleSheet, View, onPress, TextInput } from 'react-native'
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore";
import { db } from '../components/config'
import { useNavigation } from '@react-navigation/native';
function Event() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const navigation = useNavigation();

    //submit data
    function create(navigation) {
        addDoc(collection(db, "events"), {
            name: name,
            date: date,
            address: address,
            description: description,

        }).then(() => {
            // Data saved successfully!
            console.log('data submitted');

        }).catch((error) => {
            // The write failed...
            console.log(error);


        });


    }
    function cancelHandler() {
        // const { navigation } = this.props.navigation;

        navigation.navigate('Home')
    }
    function add() {
        create()
        cancelHandler()

    }
    getDocs(collection(db, "events")).then(docSnap => {
        let users = [];
        docSnap.forEach((doc) => {
            events.push({ ...doc.data(), id: doc.id })
        });
        console.log("Document data:", events);
    });



    return (
        <View style={styles.container}>

            <TextInput value={name} onChangeText={(name) => { setName(name) }} placeholder="Event Name" style={styles.textBoxes}></TextInput>
            <TextInput value={date} onChangeText={(date) => { setDate(date) }} placeholder="Date" style={styles.textBoxes}></TextInput>
            <TextInput value={address} onChangeText={(address) => { setAddress(address) }} placeholder="address" style={styles.textBoxes}></TextInput>
            <TextInput value={description} onChangeText={(description) => { setDescription(description) }} placeholder="description" style={styles.textBoxes}></TextInput>
            <Button onPress={add} title="add" > style={styles.button}
            </Button>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBoxes: {
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
    button: {
        backgroundColor: '#7fffd4',
    }

});
export default Event