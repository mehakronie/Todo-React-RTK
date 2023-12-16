import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    Todos: [ ]
}
export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                Text: action.payload
            }
            state.Todos.push(todo)
        },
        removetodo: (state, action) => {
            state.Todos = state.Todos.filter((eachval) => eachval.id !== action.payload)
        }
    }
})
export const { addtodo, removetodo } = TodoSlice.actions
export default TodoSlice.reducer
