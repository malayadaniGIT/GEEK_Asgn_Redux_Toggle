import { createSlice } from '@reduxjs/toolkit'

const themes = createSlice({
    name: "themes",
    initialState: {
        Theme: "light"
    },
    reducers: {
        setTheme: (state, actions) => {
            
            state.Theme = state.Theme === 'light' ? 'dark' : 'light'
        }

    }
})

export const { setTheme } = themes.actions
export default themes.reducer;