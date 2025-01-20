import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router";

const Card = ({ file, description, category, title, id, admin }) => {

  const navigate = useNavigate()

  const handleBlogDetail = (id) => {
    navigate(`/blog-detail/${id}`);
  };
  return (
    <div
      className="card bg-base-100 shadow-md hover:shadow-lg"
    >
      <div className="card-body">
        <div className='flex gap-1 items-center'>
          <img src={file} className='object-contain h-20' />
          <h2 className="card-title text-[16px]">{title.slice(0, 40)}...</h2>
        </div>
        <p dangerouslySetInnerHTML={description} className='h-[70px] overflow-hidden'>
        </p>
        <p className='bottom-1 font-bold'>{category.slice(0, 25)}...</p>
        <div className="card-actions justify-between">
          <div className="flex gap-3 items-center p-2">
            {admin && <><MdOutlineDelete className="text-xl" title="Delete" />
              <AiOutlineEdit className="text-xl" title="Edit" /></>}
          </div>
          <label className="btn" onClick={() => handleBlogDetail(id)}>Read More</label>
        </div>
      </div>
    </div>
  );
};

export default Card;
