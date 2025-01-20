import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    blogs: []
}

const BlogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        getAllBlogs: (state, { payload }) => {
            state.blogs = payload
        }
    },
})


export const { getAllBlogs } = BlogSlice.actions

export default BlogSlice.reducer