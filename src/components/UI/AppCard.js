import React from "react";
import {View, StyleSheet} from "react-native";

export default function AppCard(props) {
    return (
        <View style={styles.Card}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        flexDirection: 'row',
        padding: 20,
   /*     borderWidth: 2,
        borderColor: 'green',*/
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: 'black', /* только для IOS! */
        shadowRadius: 2, /* только для IOS! */
        shadowOpacity: 0.3, /* только для IOS! */
        shadowOffset: {width: 2, height: 2}, /* только для IOS! */
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 14, /* только для android */

    }
})