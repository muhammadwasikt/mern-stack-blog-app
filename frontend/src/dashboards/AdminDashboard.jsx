import { useSelector } from 'react-redux';
import Card from '../components/common/Card';
import BlogDetailModal from '../components/common/BlogDetailModal';
import { useState } from 'react';



const AdminDashboard = () => {

  const blogs = useSelector(state => state.blog.blogs)

  return (
    <>
      <div className="">
        {blogs?.map((data, index) => (
          <Card
            key={index}
            file={data?.file[0]}
            description={{ __html: data?.description }}
            category={data?.category}
            title={data?.title}
            id={data?._id}
            admin />
        ))}
      </div>
    </>
  );
};

export default AdminDashboard;
