import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        createNotification(state, action) {
            const text = action.payload
            return text
        },
        removeNotification(state, action) {
          return null
        }
    }

})
  
export const { createNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer