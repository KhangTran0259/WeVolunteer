import React from 'react'
import { View, StyleSheet } from 'react-native'
import Input1 from './Input1'
import Button from './Button';

import style, { GlobalStyles } from '../constant/style'


function EventForm(submitButtonLabel, onCancel, onSubmit, defaultValues) {

    function inputChangedHandler(inputIdentifier, enteredValue) {
        const [inputs, setInputs] = useState({
            name: '',
            date: '',
            address: '',
            description: '',
        });
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue },
            };
        });
    }
    function submitHandler() {
        const expenseData = {
            name: inputs.name.value,
            address: inputs.address.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value,
        };
        onSubmit(expenseData);
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

            </View>
        </View>

    )
}

export default EventForm;
const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary800,
        flex: 1,
        padding: 24,
    },

});