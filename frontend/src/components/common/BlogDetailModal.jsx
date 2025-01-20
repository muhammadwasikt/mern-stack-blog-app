import { useSelector } from "react-redux";
import { useParams } from "react-router";

const BlogDetailModal = () => {
    const blog = useSelector(state => state.blog.blogs)
    const blogId = useParams()
    const blogDetail = blog?.find(blog => blog._id == blogId.id)


    return (
        <div className="p-5">
            <h3 className="font-bold text-lg">{blogDetail?.title}</h3>
            <p className="py-4" dangerouslySetInnerHTML={{ __html: blogDetail?.description }}></p>
            <img src= {blogDetail?.file} alt="Blog Image" className="object-contain"/>
            <h3 className="pt-2 font-bold">Author: {blogDetail?.author}</h3>
            <p className="text-sm">Created Date: {new Date(blogDetail.createdAt).toLocaleDateString()}</p>
            <p className="text-sm">Created Time: {new Date(blogDetail.createdAt).toLocaleTimeString()}</p>
        </div>
    );
};

export default BlogDetailModal;
