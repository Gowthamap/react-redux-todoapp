// import { filter } from '@chakra-ui/react';
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DELETE_TODO, EDIT_TODO } from './actionsTypes';

let nextTodoId = 0;
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content: content,
    }
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {id},
}) 

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id },
});

export const editTodo = (content) => ({
    type: EDIT_TODO,
    payload: { 
        content,
     }
});
 
export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
}); 