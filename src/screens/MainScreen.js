import React from "react";
import {StyleSheet, View, FlatList} from 'react-native';
import AddToDo from "../components/AddToDo.js";
import Todo from "../components/Todo.js";

export const MainScreen = ({addTodo, removeTodo, todos, onOpen}) => {
    return (
        <View style={styles.MainScreen}>
            <AddToDo onSubmit={addTodo}/>

            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} openCurrentTodo={onOpen}/>
                }/>
        </View>
    )
}

const styles = StyleSheet.create({
    MainScreen: {}
})