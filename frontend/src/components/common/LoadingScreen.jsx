import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "/assets/images/logo.jpg"; 

const LoadingScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const blogs = useSelector(state => state.blog.blogs)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (blogs.length > 0) {
        setLoading(false);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [blogs]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-32 h-32 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <img src={logo} alt="Loading..." className="w-20 h-20 animate-pulse" />
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingScreen;
