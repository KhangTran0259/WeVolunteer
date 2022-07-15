import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native';

function Input1({ label, textInputConfig }) {
    const inputStyles = [styles.input];
    if (textInputConfig && textInputConfig.inputMultiline) {
        inputStyles.push(styles.inputMultiline)
    }
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}> {label}</Text>
            <TextInput style={styles.input}{...textInputConfig} />
        </View>
    )
}

export default Input1;
const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,


    },
    label: {
        fontSize: 12,
        marginBottom: 4,
        color: '#5721d4',

    },
    input: {
        backgroundColor: '#c6affc',
        color: '#a281f0',
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },

});