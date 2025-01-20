import {Link} from 'react-router';
import { useSelector } from 'react-redux';
import Card from '../components/common/Card';


const Home = () => {
  const user = useSelector(state => state.user.userId);
  const blogs = useSelector(state => state.blog.blogs)
 

  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-screen bg-secandory">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-blue-600">Welcome to BlogApp</h1>
            <p className="py-6">
              Discover, write, and share amazing blogs with the world!
            </p>
            <Link to={user ? '/all-blogs' : '/auth/sign-in'} className="btn bg-blue-600 text-white">Start Writing</Link>
          </div>
        </div>
      </div>

      {/* Featured Blogs */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Trending Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs?.map((data, index) => (
              <Card 
              key={index} 
              file={data?.file[0]} 
              description={{ __html: data?.description }} 
              category={data?.category} 
              title={data?.title} 
              id={data?._id}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
