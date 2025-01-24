import {useNavigate} from "react-router";
import { useSelector } from "react-redux";

const HeroSection = () => {
    const user = useSelector(state => state.user.userId);
    const navigate = useNavigate()

    return (
        <div className="bg-secandory py-12 px-6 text-center min-h-[50vh] flex flex-col justify-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                {/* Welcome Text */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    WELCOME BACK, <span className="text-primary">{user.name.toUpperCase()}</span>!
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl mb-6">
                    Explore new blog posts, manage your content, and stay inspired.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap justify-center">
                    <button className="btn bg-primary text-secandory" onClick={()=>navigate('/blog/add')}>
                        Create a New Post
                    </button>
                    <button className="btn bg-primary text-secandory" onClick={()=>navigate('/my-blogs')}>
                        View My Blogs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
