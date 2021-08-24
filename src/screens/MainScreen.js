import React, {useState, useEffect} from "react";
import {StyleSheet, View, FlatList, Image, Dimensions} from 'react-native';
import AddToDo from "../components/AddToDo.js";
import Todo from "../components/Todo.js";
import {THEME} from "../theme.js";

export const MainScreen = ({addTodo, removeTodo, todos, onOpen}) => {
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2) // ширина для каждой todo

    useEffect(() => {
        const update = () => setDeviceWidth(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)
        Dimensions.addEventListener('change', update)
        return () => {
            Dimensions.removeEventListener('change', update)
        }
    })

    let content = (
        <View style={{width: deviceWidth}}>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} openCurrentTodo={onOpen}/>}
            />
        </View>
    )

    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrapper}>
                <Image style={styles.img} source={require('../../assets/empty.png')}/>
            </View>
        )
    }
    return (
        <View style={styles.container}>
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
    },
})