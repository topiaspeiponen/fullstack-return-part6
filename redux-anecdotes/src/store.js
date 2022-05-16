import { configureStore } from '@reduxjs/toolkit'
import anecoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'


const store = configureStore({
    reducer: {
        anecdotes: anecoteReducer,
        notification: notificationReducer,
        filter: filterReducer
    }
})

export default store