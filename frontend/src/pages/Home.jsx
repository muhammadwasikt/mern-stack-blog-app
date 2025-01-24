import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import CardCarousel from '../components/common/CardCarousel';
import HeroSection from '../components/common/HeroSection';
import WeatherUpdate from '../components/common/WeatherUpdate';


const Home = () => {
  const user = useSelector(state => state.user.userId);
  const blogs = useSelector(state => state.blog.blogs)
  let blogList = []
  blogs?.slice(0, 5).forEach(element => {
    blogList.unshift(element)
  });
  return (
    <div>
      {/* Hero Section */}
      {!user ?
        <div className="hero min-h-screen bg-secandory">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-blue-600">Welcome to BlogApp</h1>
              <p className="py-6">
                Discover, write, and share amazing blogs with the world!
              </p>
              <Link to='/auth/sign-in' className="btn bg-blue-600 text-white">Get Started</Link>
            </div>
          </div>
        </div>
        :
        <>
          <WeatherUpdate />
          <HeroSection />
        </>
      }
      {/* Featured Blogs */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Trending Blogs</h2>
        <CardCarousel blogList={blogList} />
      </div>
    </div>
  );
};

export default Home;
