import { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router";
<<<<<<< HEAD
import { useSelector } from "react-redux";

const Card = ({ file, description, category, title, id, admin, path, date , author }) => {

  const [timeAgo, setTimeAgo] = useState('');
  const navigate = useNavigate()
=======
import { useDispatch, useSelector } from "react-redux";
import { deletReq } from "../../api/axios";
import { deleteBlog } from "../../redux/reducers/blogSlice";

const Card = ({ file, description, category, title, id, admin, path, date, author }) => {

  const [timeAgo, setTimeAgo] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch();
>>>>>>> 938d8ba (update)
  const userName = author?.replace('.', '').slice(0, 2).toUpperCase()
  const handleBlogDetail = (id) => {
    navigate(`/${path}/${id}`);
  };

<<<<<<< HEAD
=======
  const handleDeleteBlog = async (id) => {
    await deletReq(`/blog/delete/${id}`)
    dispatch(deleteBlog(id));
  }


>>>>>>> 938d8ba (update)
  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentTime = new Date();
      const postTime = new Date(date);
      const diffInSeconds = Math.floor((currentTime - postTime) / 1000);

      if (diffInSeconds < 60) {
        setTimeAgo('now');
      } else if (diffInSeconds < 3600) {
        setTimeAgo(`${Math.floor(diffInSeconds / 60)} min ago`);
      } else if (diffInSeconds < 86400) {
        setTimeAgo(`${Math.floor(diffInSeconds / 3600)} hour ago`);
      } else if (diffInSeconds < 86400 * 2) {
        setTimeAgo('1 day ago');
      } else {
        setTimeAgo(postTime.toLocaleDateString());
      }
    };

    calculateTimeAgo();

<<<<<<< HEAD
    const interval = setInterval(calculateTimeAgo, 60000); 
=======
    const interval = setInterval(calculateTimeAgo, 60000);
>>>>>>> 938d8ba (update)
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div
      className="card shadow-md hover:shadow-xl hover:scale-105 border"
    >
      <div className="card-body px-3 pt-2">
        <div className='flex gap-1 items-center h-14'>
          <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center avatar online border">
            {userName}
          </div>
          <div>
            <h2 className="card-title text-[14px] font-bold">{author?.charAt(0).toUpperCase() + author?.slice(1)}</h2>
            <p className='text-[10px]'>{timeAgo}</p>
          </div>
        </div>
        <div className='flex gap-1 items-center h-24'>
          <img src={file} className='object-contain h-20' />
          <h2 className="card-title text-[14px] font-bold">{title?.slice(0, 40)}...</h2>
        </div>
        <p dangerouslySetInnerHTML={description} className='h-[70px] overflow-hidden'>
        </p>
        <p className='bottom-1 font-bold'>{category?.slice(0, 25)}...</p>
        <div className="card-actions justify-between">
          <div className="flex gap-3 items-center p-2">
<<<<<<< HEAD
            {admin && <><MdOutlineDelete className="text-xl" title="Delete" />
=======
            {admin && <><MdOutlineDelete className="text-xl" title="Delete" onClick={()=>handleDeleteBlog(id)}/>
>>>>>>> 938d8ba (update)
              <AiOutlineEdit className="text-xl" title="Edit" /></>}
          </div>
          <label className="btn" onClick={() => handleBlogDetail(id)}>Read More</label>
        </div>
      </div>
    </div>
  );
};

export default Card;
