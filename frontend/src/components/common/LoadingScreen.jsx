import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "/assets/images/logo.jpg"; 
import toast from "react-hot-toast";

const LoadingScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const blogs = useSelector(state => state.blog.blogs)

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [blogs]);

  return (
    <div>
      {loading ?
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 ">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[130px] h-[130px] border-4 border-gray-300 border-t-blue-500 animate-spin rounded-full"></div>
            <img src={logo} alt="Loading..." className="w-[125px] h-[125px] object-fill rounded-full" />
          </div>
        </div>
        :
        <>{children}</>
      }
    </div>
  );
};

export default LoadingScreen;
