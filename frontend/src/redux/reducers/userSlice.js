import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: '',
    userId: '',
    userDetail: [],
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userId: (state, { payload }) => {
            state.userId = payload
        },
        userToken: (state, { payload }) => {
            state.token = payload
        },
        userDetail: (state, { payload }) => {
            state.userDetail = payload
        },
        deleteUser: (state, { payload }) => {
            state.userDetail = state.userDetail.filter((item) => item._id !== payload)
        },
    },
})


export const { userId, userToken, userDetail, deleteUser } = UserSlice.actions

export default UserSlice.reducer