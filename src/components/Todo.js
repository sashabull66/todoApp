import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Todo({todo, onRemove, openCurrentTodo}) {

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => openCurrentTodo(todo.id)}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.Todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    },

})