import Blog from "../models/blogModel.js";


const getBlog = async (req, res) => {
    try {
        const blog = await Blog.find();
        if (!blog) {
            return res.status(404).send({ message: "Blog not found" });
        }

        return res.status(200).send({ status: 200, data: blog });
    } catch (error) {
        return res.status(error.status).send({ message: error.message });
    }
}

const addBlog = async (req, res) => {
    try {
        const path = req.file.path
        
        if (!path || !req.file) {
            return res.status(400).send({ message: "Please upload a file" });
        }
        const { title, description, category, author } = req.body;
        const response = await Blog.create({
            title,
            description,
            category,
            file: path,
            author,
        })
        res.status(201).send({ status: 201, message: "Blog added successfully", data: response })
    } catch (error) {
        return res.send(error.message)
    }
}

const deleteAllBlogs = async (req, res) => {
    try {
        await Blog.deleteMany({});
        res.status(200).send({ message: "All Blogs deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}





export { getBlog, addBlog, deleteAllBlogs }
