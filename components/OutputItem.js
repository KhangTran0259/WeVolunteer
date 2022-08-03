import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constant/style";

function OutputItem({ description, date, address, name }) {
    return (
        <Pressable>
            <View style={styles.item}>
                <View>

                    <Text style={[styles.textBase, styles.description]}> {name}</Text>
                    <Text style={styles.textBase}> {date}</Text>
                    <Text style={styles.textBase}> {description}</Text>
                    <Text style={styles.amount}>{address} </Text>
                </View>
                <View style={styles.addressContainer}>
                    <Text style={styles.amount}>{address} </Text>
                </View>


            </View>
        </Pressable>
    );
}
export default OutputItem;
const styles = StyleSheet.create({
    item: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,


    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    addressContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 4,

    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
        fontSize: 10,
    }

});