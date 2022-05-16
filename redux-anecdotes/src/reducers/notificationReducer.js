import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: 'test',
    reducers: {
        createNotification(state, action) {
            const text = action.payload
            return text
        }
    }

})
  
export const { createNotification } = notificationSlice.actions
export default notificationSlice.reducer