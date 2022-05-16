import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        createNotification(state, action) {
            const text = action.payload.text
            return {
              content: text,
              id: action.payload.id
            }
        },
        removeNotification(state, action) {
          if (action.payload === state.id) {
            return null
          } else {
            return state
          }
        }
    }

})
  
export const { createNotification, addTimeoutID, removeNotification } = notificationSlice.actions

const getId = () => (100000 * Math.random()).toFixed(0)

export const setNotification = (text, timeout) => {
  return async (dispatch) => {
    const newId = getId()

    dispatch(createNotification({
      text: text, 
      id: newId
    }))
    setTimeout(() => {
      dispatch(removeNotification(newId))
    }, (timeout * 1000))
  }
}


export default notificationSlice.reducer