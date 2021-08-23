import React from "react";
import {StyleSheet, View} from 'react-native';
import {THEME} from '../theme.js'
import AppTextBold from "./UI/AppTextBold.js";

export default function Navbar(props) {
    return (
        <View style={styles.Navbar}>
            <AppTextBold style={styles.text}>{props.title}</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    Navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    text: {
        color: 'white',
    }
})