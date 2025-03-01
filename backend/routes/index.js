import express from "express";
import { authRoutes } from "../auth/routes/authRoutes.js";
import {blogRoutes} from "../blogs/routes/blogRoutes.js"
import { weatherRoute } from "../weather/weatherRoutes.js";



export const routes = express()



routes.use('/user',authRoutes)
routes.use('/blog',blogRoutes)
routes.use('/weather',weatherRoute)
<<<<<<< HEAD

=======
>>>>>>> 938d8ba (update)
