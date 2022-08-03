import React from 'react'
import { StyleSheet, View, Text, } from 'react-native';
import OutputList from './OutputList';

import style, { GlobalStyles } from '../constant/style';
const DUMMY = [
    {
        name: 'Tutor Student',
        date: '7/18/2022',
        address: '7800 Alton Ave,CA 92412',
        description: 'dfdsfsdf',
    },
    {
        name: 'Mentor a child',
        date: '7/18/2022',
        address: '7800 Alton Ave,CA 92412',
        description: 'sdfsdfsdf',
    },
    {
        name: 'Coaching',
        date: '7/18/2022',
        address: '7800 Alton Ave,CA 92412',
        description: 'sdfsdf',
    },
    {
        name: 'Reading Program',
        date: '7/18/2022',
        address: '7800 Alton Ave,CA 92412',
        description: 'dsfsdf',
    },
];

function Output({ expense, expensePeriod }) {
    return (
        <View style={styles.container}>

            <OutputList expense={DUMMY} />
        </View>
    );
}

export default Output;
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
    },

});