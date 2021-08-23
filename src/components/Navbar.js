import React from "react";
import {StyleSheet, View, Platform} from 'react-native';
import {THEME} from '../theme.js'
import AppTextBold from "./UI/AppTextBold.js";

export default function Navbar(props) {
    return (
        <View style={{...styles.Navbar, ...Platform.select({
                ios: styles.NavbarIOS,
                android: styles.NavbarAndroid,
            })}}>
            <AppTextBold style={styles.text}>{props.title}</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    Navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    NavbarAndroid:{
        backgroundColor: THEME.MAIN_COLOR,
    },
    NavbarIOS:{
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1,
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : 'white',
    }
})