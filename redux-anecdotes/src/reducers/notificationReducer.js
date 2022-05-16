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

export const setNotification = (text, timeout) => {
  return async dispatch => {
    dispatch(createNotification(text))
    setTimeout(() => {
      dispatch(removeNotification())
    }, (timeout * 1000))
  }
}


export default notificationSlice.reducer