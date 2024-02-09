import { createSlice } from "@reduxjs/toolkit";


const initialState = {};


export const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = action.payload;
            const keys = Object.keys(state);
            if (keys.includes(todo.date)) {
                state[todo.date].unshift(action.payload);
                return;
            }

            state[todo.date] = [action.payload];
        },
        deleteTodo: (state, action) => {
            const keys = Object.keys(state);
            keys.forEach((date) => {
                if (state[date] && date !== "_persist") {
                    state[date] = state[date].filter(todo => todo.id !== action.payload)
                }
            });
        },
        updateTodo: (state, action) => {
            const keys = Object.keys(state);
            keys.forEach((date) => {
                if (state[date] && date !== "_persist") {
                    state[date].forEach(todo => {
                        if (todo.id === action.payload.id) {
                            todo.title = action.payload.title;
                            todo.description = action.payload.description;
                            todo.priority = action.payload.priority;
                            todo.status = action.payload.status;
                        }
                    })
                }
            });
        }
    }
});

export const { addTodo, deleteTodo, updateTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;