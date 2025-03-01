import express from "express"
<<<<<<< HEAD
import { addBlog, deleteAllBlogs, getBlog, updateBlog } from "../controller/blogController.js"
=======
import { addBlog, deleteAllBlogs, deleteBlog, getBlog, updateBlog } from "../controller/blogController.js"
>>>>>>> 938d8ba (update)
import { upload } from "../helper/uploads.js"





export const blogRoutes = express.Router()


blogRoutes.get('/', getBlog)
blogRoutes.post('/add',upload.single('file') , addBlog)
blogRoutes.put('/update/:id',upload.single('file') , updateBlog)
<<<<<<< HEAD
=======
blogRoutes.delete('/delete/:id',deleteBlog)
>>>>>>> 938d8ba (update)
blogRoutes.delete('/delete-all',deleteAllBlogs)


