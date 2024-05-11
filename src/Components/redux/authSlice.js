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
        signupStart: (state) => {
            state.signupLoading = true
        },
        signupSuccess: (state, action) => {
            state.currentUser = action.payload
            state.signupLoading = false,
            state.error = null
        },
        signupFailure: (state, action) => {
            state.error = action.payload
            state.signupLoading = false
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
        letsChatStart: (state) => {
            state.chatLoading = true
        },
        letsChatSuccess: (state, action) => {
            state.currentUser = action.payload
            state.chatLoading = false,
            state.error = null
        },
        letsChatFailure: (state, action) => {
            state.error = action.payload
            state.chatLoading = false
        },
        postJobStart: (state) => {
            state.postLoading = true
        },
        postJobSuccess: (state, action) => {
            state.currentUser = action.payload
            state.postLoading = false,
            state.error = null
        },
        postJobFailure: (state, action) => {
            state.error = action.payload
            state.postLoading = false
        },
        applyJobStart: (state) => {
            state.applyLoading = true
        },
        applyJobSuccess: (state, action) => {
            state.currentUser = action.payload
            state.applyLoading = false,
            state.error = null
        },
        applyJobFailure: (state, action) => {
            state.error = action.payload
            state.applyLoading = false
        },

    }
})

export const { logout, applyJobStart, applyJobFailure, applyJobSuccess,postJobFailure, letsChatStart, postJobStart, postJobSuccess, letsChatFailure, letsChatSuccess, signinStart, signinSuccess, signinFailure, signupStart, signupFailure, signupSuccess,updateUserStart, updateUserSuccess, updateUserFailure, logoutStart, logoutFailure, logoutSuccess  } = userSlice.actions
export default userSlice.reducer