import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native';

export const TodoScreen = (props) => {
    return (
        <View style={styles.TodoScreen}>
            <Text>{props.todo.title}</Text>
            <Button title={'назад'} onPress={props.back}/>
        </View>
    )
}

const styles = StyleSheet.create({
    TodoScreen: {}
})