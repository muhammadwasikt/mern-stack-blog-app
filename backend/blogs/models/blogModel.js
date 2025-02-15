import mongoose from "mongoose";


const BlogSchema = mongoose.Schema({
    title: {type:String},
    description: {type: String},
    file: {type: Array},
    filePublicId: {type: String},
    category: {type: String},
    author: {type: String},

},{timestamps:true})


const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;