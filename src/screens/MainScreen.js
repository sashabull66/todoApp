import React from "react";
import {StyleSheet, View, FlatList, Image} from 'react-native';
import AddToDo from "../components/AddToDo.js";
import Todo from "../components/Todo.js";

export const MainScreen = ({addTodo, removeTodo, todos, onOpen}) => {
    let content = (
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} openCurrentTodo={onOpen}/>}
        />
    )

    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrapper}>
                <Image style={styles.img} source={require('../../assets/empty.png')}/>
            </View>
        )
    }
    return (
        <View>
            <AddToDo onSubmit={addTodo}/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})