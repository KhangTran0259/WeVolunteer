import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constant/style';

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
        color: GlobalStyles.colors.primary100,

    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },

});