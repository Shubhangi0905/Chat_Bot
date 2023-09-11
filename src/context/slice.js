import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {
        name: undefined,
        age: undefined,
        phonr: undefined
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.age = action.payload.age
        },
        setPhone: (state, action) => {
            state.phonr = action.payload.phone
        }
    }
})

export const {setUser, setPhone} = slice.actions;

export default slice.reducer;