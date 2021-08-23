import React, {useState} from "react";
import {View, TextInput, StyleSheet, Alert} from "react-native";
import {THEME} from "../theme.js";
import {Ionicons} from '@expo/vector-icons';

export default function AddToDo({onSubmit}) {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (!value.trim().length) {
            Alert.alert('Введите валидные данные!')
        } else {
            onSubmit(value)
            setValue('')
        }
    }

    return (
        <View style={styles.AddToDo}>
            <TextInput
                style={styles.input}
                onChangeText={text => setValue(text)}
                placeholder={'Enter you todo!'}
                value={value}
                autoCorrect={false}
                autoCapitalize={"none"}
            />
            <Ionicons.Button onPress={pressHandler} name='add-circle-outline'>Добавить</Ionicons.Button>
            {/*<Button title={'Добавить'} onPress={pressHandler}/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    AddToDo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15

    },
    input: {
        padding: 10,
        width: '60%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: THEME.MAIN_COLOR

    },
    button: {}
})