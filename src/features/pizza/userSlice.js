import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    pizza: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
        removeUser(state) {
            state.email = null
            state.address = null
            state.token = null
            state.id = null
            state.pizza = {}
        }
    } 
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer