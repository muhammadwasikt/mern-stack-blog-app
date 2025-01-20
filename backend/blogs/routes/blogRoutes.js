import express from "express"
import { addBlog, deleteAllBlogs, getBlog } from "../controller/blogController.js"
import { upload } from "../helper/uploads.js"





export const blogRoutes = express.Router()


blogRoutes.get('/', getBlog)
blogRoutes.post('/add',upload.single('file') , addBlog)
blogRoutes.delete('/delete-all',deleteAllBlogs)


