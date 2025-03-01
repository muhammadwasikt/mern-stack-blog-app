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
        console.log(req.file);  
        
        // Check if file exists
        if (!req.file) {
            return res.status(400).send({ message: "Please upload a file" });
        }

        const { title, description, category, author } = req.body;
        const path = req?.file?.path; 
        const response = await Blog.create({
            title,
            description,
            category,
            file: path, 
            filePublicId: req?.file?.filename,
            author,
        });

        res.status(201).send({ status: 201, message: "Blog added successfully", data: response });
    } catch (error) {
        // return res.status(500).send({ message: error.message });
    }
};

const updateBlog = async (req, res) => {
      const blogId = req.params.id;
      const { title, description, category, author } = req.body;
  
      const newFile = req.file?.path;
      const newFilePublicId = req.file?.filename;
  
      try {
        const blog = await Blog.findById(blogId);
  
        if (!blog) {
          return res.status(404).send({ message: "Blog not found" });
        }
  
        // Delete old file from Cloudinary if a new one is uploaded
        if (newFile && blog.filePublicId) {
          await cloudinary.uploader.destroy(blog.filePublicId);
        }
  
        // Update blog
        const updatedBlog = await Blog.findByIdAndUpdate(
          blogId,
          {
            title: title || blog.title,
            description: description || blog.description,
            category: category || blog.category,
            author: author || blog.author,
            file: newFile || blog.file,
            filePublicId: newFilePublicId || blog.filePublicId,
          },
          { new: true }
        );
  
        res.status(200).send({ message: "Blog updated successfully", updatedBlog });
      } catch (error) {
        res.status(500).send({ message: "Error updating blog", error: error.message });
      }
    }

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params
        const file = await Blog.findById(id);

        if (file?.filePublicId) {
            await cloudinary.uploader.destroy(file?.filePublicId);
        }
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            return res.status(404).send({ status: 404, message: "Blog not found" })
        };
        res.status(200).send({ status: 200, message: "blog deleted successfully" })
    } catch (error) {
        return res.status(error.status).send({ status: error.status, message: error.message })
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





export { getBlog, addBlog, deleteAllBlogs , deleteBlog , updateBlog}
