import React, {useReducer} from "react";
import {TodoContext} from 'todoContext.js'; // импорт определения контекста
import todoReducer from "./todoReducer.js";

export default function TodoState({children}) {
    const initialState = {
        todos: [{id:'1',title:'Выучить React Native'}],
    };
    const [state, dispatch] = useReducer(todoReducer, initialState)
    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,

            }}>
            {children}
        </TodoContext.Provider>
    )
}