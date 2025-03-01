import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: '',
    userId: '',
<<<<<<< HEAD
    userDetail: []
=======
    userDetail: [],
>>>>>>> 938d8ba (update)
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
<<<<<<< HEAD
        }
=======
        },
        deleteUser: (state, { payload }) => {
            state.userDetail = state.userDetail.filter((item) => item._id !== payload)
        },
>>>>>>> 938d8ba (update)
    },
})


<<<<<<< HEAD
export const { userId , userToken , userDetail } = UserSlice.actions
=======
export const { userId, userToken, userDetail, deleteUser } = UserSlice.actions
>>>>>>> 938d8ba (update)

export default UserSlice.reducer