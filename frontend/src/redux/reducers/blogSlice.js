import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    blogs: [],
}

const BlogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        getAllBlogs: (state, { payload }) => {
            state.blogs = payload
        },
        deleteBlog: (state, { payload }) => {
            state.blogs = state.blogs.filter((item) => item._id !== payload)
        },
    },
})


export const { getAllBlogs , deleteBlog } = BlogSlice.actions

export default BlogSlice.reducer