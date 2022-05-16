import { configureStore } from '@reduxjs/toolkit'
import anecoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'


const store = configureStore({
    reducer: {
        anecdotes: anecoteReducer,
        notification: notificationReducer
    }
})

export default store