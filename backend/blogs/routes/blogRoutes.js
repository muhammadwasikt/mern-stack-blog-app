import express from "express"
import { addBlog, deleteAllBlogs, getBlog, updateBlog } from "../controller/blogController.js"
import { upload } from "../helper/uploads.js"





export const blogRoutes = express.Router()


blogRoutes.get('/', getBlog)
blogRoutes.post('/add',upload.single('file') , addBlog)
blogRoutes.put('/update/:id',upload.single('file') , updateBlog)
blogRoutes.delete('/delete-all',deleteAllBlogs)


