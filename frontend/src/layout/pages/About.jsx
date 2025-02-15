import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const About = () => {

  const user = useSelector(state => state.user.userId);
  const navigate = useNavigate()
  return (
    <div className="bg-base-100 text-base-content py-10 px-6 lg:px-20">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to <span className="text-primary">BLOG BUSTER</span>!</h1>
        <p className="text-lg text-gray-600">
          At <strong>BLOG BUSTER</strong>, we believe in the power of stories, ideas, and knowledge.
          Join us to share your thoughts, explore perspectives, and connect with a vibrant community.
        </p>
      </div>

      {/* Mission Section */}
      <div className="my-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Mission</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Our mission is to provide a platform where voices are heard, stories are shared, and ideas are celebrated. 
          We aim to make blogging accessible and enjoyable for everyone, fostering a community of curious minds who are eager to learn, share, and grow.
        </p>
      </div>

      {/* Features Section */}
      <div className="my-10">
        <h2 className="text-3xl font-semibold text-center mb-6">What We Offer</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card border bg-secandory shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">User-Friendly Interface</h3>
            <p className="text-gray-600">
              Effortlessly create, edit, and publish your blogs with ease.
            </p>
          </div>
          <div className="card border bg-secandory shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Rich Features</h3>
            <p className="text-gray-600">
              From text formatting to multimedia integration, everything is at your fingertips.
            </p>
          </div>
          <div className="card border bg-secandory shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Secure Environment</h3>
            <p className="text-gray-600">
              Your data is safe with us, backed by robust technologies like MongoDB and JWT authentication.
            </p>
          </div>
          <div className="card border bg-secandory shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Community Building</h3>
            <p className="text-gray-600">
              Engage with other bloggers through comments, likes, and discussions.
            </p>
          </div>
          <div className="card border bg-secandory shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Scalable Technology</h3>
            <p className="text-gray-600">
              Our platform is built with scalability in mind, ensuring smooth performance.
            </p>
          </div>
          <div className="card border bg-secandory shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Modern Design</h3>
            <p className="text-gray-600">
              Experience a clean, modern interface powered by DaisyUI and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>

      {/* Join Section */}
      {!user &&
        <div className="my-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-6">
          Whether you're an experienced blogger or just starting out, <strong>BLOG BUSTER</strong> is the perfect place for you.
          Let your words make an impact.
        </p>
        <button className="btn bg-primary px-8 text-secandory" onClick={()=>navigate('/auth/sign-up')}>Sign Up Now</button>
      </div>}
    </div>
  );
};

export default About;
