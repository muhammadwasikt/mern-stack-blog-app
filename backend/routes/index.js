import express from "express";
import { authRoutes } from "../auth/routes/authRoutes.js";
import {blogRoutes} from "../blogs/routes/blogRoutes.js"



export const routes = express()



routes.use('/user',authRoutes)
routes.use('/blog',blogRoutes)

