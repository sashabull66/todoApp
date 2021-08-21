import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navbar from "./src/components/Navbar.js";
import AddToDo from "./src/components/AddToDo.js";

export default function App() {
    const [todos, setTodos] = useState([])
    const addTodo = (title) => {
        const newTodo = {
            id: Date.now().toString(),
            title,
        }
        setTodos(prevState => [...prevState, newTodo])
    }
    return (
        <View style={styles.container}>
            <Navbar title={'To Do List'}/>
            <View style={styles.content}>
                <AddToDo onSubmit={addTodo}/>
                <View>
                    {todos.map(todo=><Text key={todo.id}>{todo.title}</Text>)}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    content: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    }

});
