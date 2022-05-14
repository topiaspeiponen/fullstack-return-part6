import { configureStore } from '@reduxjs/toolkit'
import anecoteReducer from './reducers/anecdoteReducer'


const store = configureStore({
    reducer: {
        anecdotes: anecoteReducer
    }
})

export default store