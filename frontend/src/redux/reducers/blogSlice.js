import { createSlice } from '@reduxjs/toolkit'



const initialState = {
<<<<<<< HEAD
    blogs: []
=======
    blogs: [],
>>>>>>> 938d8ba (update)
}

const BlogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        getAllBlogs: (state, { payload }) => {
            state.blogs = payload
<<<<<<< HEAD
        }
=======
        },
        deleteBlog: (state, { payload }) => {
            state.blogs = state.blogs.filter((item) => item._id !== payload)
        },
>>>>>>> 938d8ba (update)
    },
})


<<<<<<< HEAD
export const { getAllBlogs } = BlogSlice.actions
=======
export const { getAllBlogs , deleteBlog } = BlogSlice.actions
>>>>>>> 938d8ba (update)

export default BlogSlice.reducer