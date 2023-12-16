import {configureStore} from '@reduxjs/toolkit'
import todoReducers from '../Slice/TodoSlice'
const store = configureStore({
    reducer: todoReducers
    
})
export default store