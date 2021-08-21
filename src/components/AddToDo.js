import React from "react";
import {View, TextInput, Button, StyleSheet} from "react-native";

export default function AddToDo({onSubmit}) {

    const pressHandler = () => {
        onSubmit('TGest togo')
    }

    return (
        <View style={styles.AddToDo}>
            <TextInput style={styles.input}/>
            <Button title={'Добавить'} onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    AddToDo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    input: {
        padding: 10,
        width: '60%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#3949ab'

    },
    button: {}
})