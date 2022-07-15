import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Input = ({ value, setValue, placeholder }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                styles={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 5,
        borderColor: '#e8e8e8',
        paddingHorizontal: 20,
        marginVertical: 10,

    },

});
export default Input