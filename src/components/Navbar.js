import React from "react";
import {StyleSheet, Text, View} from 'react-native';

export default function Navbar(props) {
    return (
        <View style={styles.Navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 10
    },
    text: {
        color: 'white',
    }
})