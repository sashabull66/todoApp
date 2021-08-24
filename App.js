import React, {useState} from 'react';
import * as Font from 'expo-font'
import {Alert, StyleSheet, View} from 'react-native';
import AppLoading from 'expo-app-loading'

import Navbar from "./src/components/Navbar.js";
import {MainScreen} from "./src/screens/MainScreen.js";
import {TodoScreen} from "./src/screens/TodoScreen.js";
import {THEME} from "./src/theme.js";

async function loadAPP() {
    await Font.loadAsync({
        'barlowBold': require('./assets/fonts/BarlowCondensed-Bold.ttf'),
        'barlowRegular': require('./assets/fonts/BarlowCondensed-Regular.ttf'),
    })
}

export default function App() {
    const [isReady, setIsReady] = useState(false);
    const [todoId, setTodoId] = useState(null); // state для текущего экрана (страницы)
    const [todos, setTodos] = useState([]); // state для todoшек
    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadAPP}
                onError={console.warn}
                onFinish={()=>setIsReady(true)}
            />
        )
    }

    const addTodo = title => {
        const newTodo = {
            id: Date.now(),
            title,
        }
        setTodos(prevState => [...prevState, newTodo])
    };

    const removeTodo = id => {
        const currentTodoForDel = todos.find(todo => todo.id === id)
        Alert.alert(
            "Удаление элемента",
            `Вы уверены что хотите удалить "${currentTodoForDel.title}"?`,
            [
                {
                    text: "Отмена",
                    onPress: () => {
                    },
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        backToMain()
                        setTodos(prevState => prevState.filter(todo => todo.id !== id))
                    }
                }
            ]
        );
    };

    const onOpenTodo = id => {
        setTodoId(id)
    };

    const backToMain = () => setTodoId(null)

    const updateTodo = (id, title) => {
        setTodos(old =>
            old.map(todo => {
                if (todo.id === id) {
                    todo.title = title
                }
                return todo
            })
        )
    }

    let content = (
        <MainScreen
            todos={todos}
            addTodo={addTodo}
            removeTodo={removeTodo}
            onOpen={onOpenTodo}
        />);

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId);
        content = <TodoScreen back={backToMain} todo={selectedTodo} remove={removeTodo} onSave={updateTodo}/>
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
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,
    }

});
