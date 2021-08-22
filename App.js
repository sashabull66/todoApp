import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Navbar from "./src/components/Navbar.js";
import {MainScreen} from "./src/screens/MainScreen.js";
import {TodoScreen} from "./src/screens/TodoScreen.js";

export default function App() {
    const [todoId, setTodoId] = useState(null); // state для текущего экрана (страницы)
    const [todos, setTodos] = useState([]); // state для todoшек

    const addTodo = title => {
        const newTodo = {
            id: Date.now(),
            title,
        }
        setTodos(prevState => [...prevState, newTodo])
    };

    const removeTodo = id => {
        setTodos(prevState => prevState.filter(todo => todo.id !== id))
    };

    const onOpenTodo = id => {
        setTodoId(id)
    };

    const backToMain = () => setTodoId(null)

    let content = (
        <MainScreen
            todos={todos}
            addTodo={addTodo}
            removeTodo={removeTodo}
            onOpen={onOpenTodo}
        />);

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId);
        content = <TodoScreen back={backToMain} todo={selectedTodo}/>
    }


    return (
        <View style={styles.container}>
            <Navbar title={'To Do List'}/>
            <View style={styles.content}>
                {content}
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
