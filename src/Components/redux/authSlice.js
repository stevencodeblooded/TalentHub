import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    updateLoading: false,
    logoutLoading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.currentUser = null
        },
        signinStart: (state) => {
            state.loading = true
        },
        signinSuccess: (state, action) => {
            state.currentUser = action.payload
            state.loading = false,
            state.error = null
        },
        signinFailure: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        updateUserStart: (state) => {
            state.updateLoading = true
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload
            state.updateLoading = false,
            state.error = null
        },
        updateUserFailure: (state, action) => {
            state.error = action.payload
            state.updateLoading = false
        },
        // logoutStart: (state) => {
        //     state.logoutLoading = true
        // },
        // logoutSuccess: (state, action) => {
        //     state.currentUser = action.payload
        //     state.logoutLoading = false,
        //     state.error = null
        // },
        // logoutFailure: (state, action) => {
        //     state.error = action.payload
        //     state.logoutLoading = false
        // },
    }
})

export const { logout ,signinStart, signinSuccess, signinFailure, updateUserStart, updateUserSuccess, updateUserFailure, logoutStart, logoutFailure, logoutSuccess  } = userSlice.actions
export default userSlice.reducer