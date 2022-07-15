import React from 'react'
import { useState } from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import Input from '../components/Input';
import Input1 from '../components/Input1';
import Button from '../components/Button';
import { useContext, useLayoutEffect } from 'react';

function cancelHandler(navigation) {
    navigation.navigate('Home');
}
function Event({ navigation }) {
    const [inputs, setInputs] = useState({
        name: '',
        date: '',
        address: '',
        description: '',
    });
    // function inputChangedHandler(inputIdentifier, enteredValue) {
    //     setInputValues((curInputValues) => {
    //         return {
    //             ...curInputValues,
    //             [inputIdentifier]: enteredValue,
    //         };
    //     });

    // }
    // function amountChangedHandler() {
    //     const expenseData = {
    //         amount: inputValues.amount,
    //         date: new Date(inputValues.date),
    //         description: inputValues.description,
    //     };
    //     const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    //     const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    //     const descriptionIsValid = expenseData.description.trim().length > 0;

    //     if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
    //         // Alert.alert('Invalid input', 'Please check your input values');
    //         setInputs((curInputs) => {
    //             return {
    //                 amount: { value: curInputs.amount.value, isValid: amountIsValid },
    //                 date: { value: curInputs.date.value, isValid: dateIsValid },
    //                 description: {
    //                     value: curInputs.description.value,
    //                     isValid: descriptionIsValid,
    //                 },
    //             };
    //             return;
    //         });

    //     }

    //     onSubmit(expenseData);
    // }
    function submitHandler() {
        const expenseData = {
            name: inputs.name.value,
            address: inputs.address.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value,
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // Alert.alert('Invalid input', 'Please check your input values');
            setInputs((curInputs) => {
                return {
                    amount: { value: curInputs.name.value, isValid: amountIsValid },
                    date: { value: curInputs.date.value, isValid: dateIsValid },
                    description: {
                        value: curInputs.description.value,
                        isValid: descriptionIsValid,
                    },
                };
            });
            return;
        }


    }
    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true },
            };
        });
    }

    return (
        <View style={styles.container}>
            <Input1 label="Name"
                textInputConfig={{
                    onChangedText: inputChangedHandler.bind(this, 'name')

                }}

            />

            <Input1 label="Date"
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    onChangedText: inputChangedHandler.bind(this, 'date')

                }}
            />

            <Input1 label="Address"
                textInputConfig={{
                    placeholder: 'Street Address',
                    onChangedText: inputChangedHandler.bind(this, 'address')

                }}
            />


            <Input1 label="Description"
                textInputConfig={{
                    multiline: true,
                    onChangedText: inputChangedHandler.bind(this, 'description')

                }}
            />
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={cancelHandler}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                    Add
                </Button>
            </View>
        </View>

    );
}


export default Event
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7fffd4',
        flex: 1,
        padding: 24,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
});