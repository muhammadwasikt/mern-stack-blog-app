import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/common/Card";

const BlogList = () => {

  const blogs = useSelector((state) => state.blog.blogs);
  const user = useSelector((state) => state.user.userId);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs?.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs?.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-base-100 text-base-content py-10 px-10">
      <div className="text-center mb-10">
        {user?.role === 'user' ?
          <>
            <h1 className="text-4xl font-bold pb-2">Our Blogs</h1>
            <p className="text-gray-600 text-lg">
              Explore our latest blog posts and stay updated with the newest trends
              in web development.
            </p>
          </> :
          <h1 className="text-4xl font-bold pb-2">BLOGS LIST</h1>
        }
      </div>

      {/* Blog Cards */}
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {currentBlogs?.reverse().map((data, index) => (
          <Card
            key={data?._id || index} // Use a unique key (preferably _id)
            file={data?.file[0]}
            description={{ __html: data?.description }}
            category={data?.category}
            title={data?.title}
            id={data?._id}
            admin={user?.role === "admin"}
            path='blog-detail'
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-1 items-center mt-8">
        <div className="flex justify-center gap-1">
          {/* Previous Button */}
          <button
            className="btn btn-sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber} // Corrected key
              className={`btn btn-sm ${currentPage === pageNumber ? "btn-active" : ""}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}

          {/* Next Button */}
          <button
            className="btn btn-sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
