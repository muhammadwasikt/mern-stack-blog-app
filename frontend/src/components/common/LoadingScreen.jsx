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
<<<<<<< HEAD
    }, 5000);
=======
    }, 2000);
>>>>>>> 938d8ba (update)
    
    return () => clearTimeout(timer);
  }, [blogs]);

  return (
<<<<<<< HEAD
    <div className={`relative h-screen ${loading ? "overflow-hidden" : "overflow-auto"}`}>
      {/* Content in the background */}
      <div className={`transition-opacity duration-500 ${loading ? "opacity-[50]" : "opacity-100"}`}>
        {children}
      </div>

      {/* Loading overlay (blocks user interaction) */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-32 h-32 border-4 border-gray-300 border-t-blue-500 animate-spin rounded-full"></div>
            <img src={logo} alt="Loading..." className="w-[125px] h-[125px] object-fill rounded-full animate-pulse" />
          </div>
        </div>
      )}
=======
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
>>>>>>> 938d8ba (update)
    </div>
  );
};

export default LoadingScreen;
