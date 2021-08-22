import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native';
import {THEME} from "../theme.js";

export const TodoScreen = (props) => {
    return (
        <View style={styles.TodoScreen}>
            <Text style={styles.title}>{props.todo.title}</Text>
            <View style={styles.btnWrapper}>
                <View style={styles.btn}><Button title={'Назад'} onPress={props.back} color={THEME.GREY_COLOR}/></View>
                <View style={styles.btn}><Button title={'Удалить'} onPress={()=>{}} color={THEME.DANGER_COLOR}/></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TodoScreen: {},
    title: {},
    btnWrapper: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn:{
        width:'44%'
    }
})