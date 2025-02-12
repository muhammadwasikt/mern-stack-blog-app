import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <div className="flex flex-col items-center gap-4 bg-secandory p-8 rounded-2xl shadow-lg">
        <MdErrorOutline className="w-16 h-16 text-error" />
        <h1 className="text-4xl font-bold text-error">404</h1>
        <p className="text-lg text-base-content">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/">
          <button className="btn bg-primary mt-4 text-secandory">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
