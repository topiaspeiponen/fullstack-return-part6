import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: null,
    reducers: {
        changeFilter(state, action) {
            if (action.payload === '') {
                return null
            }
            const text = action.payload
            return text
        }
    }

})
  
export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer