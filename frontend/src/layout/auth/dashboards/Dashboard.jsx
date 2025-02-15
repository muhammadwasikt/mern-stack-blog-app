import { useEffect, useState } from "react";
import { HiChartPie, HiDocumentText, HiUsers } from "react-icons/hi2";
import { useSelector } from "react-redux";


const Dashboard = () => {

  const blogs = useSelector(state => state.blog.blogs)
  const users = useSelector((state) => state.user.userDetail);
  const role = useSelector(state => state.user.userId)
  const [totalBlogs, setTotalBlogs] = useState(0)
  const [myBlogs, setMyBlogs] = useState()

  const blogsCount = () => {
    const allBlogs = blogs.filter(item => item?.author === role?.name)
    setTotalBlogs(allBlogs.length)
    setMyBlogs(allBlogs)
  }

  useEffect(() => {
    blogsCount()
  }, [blogs, role])

  return (
    <>
      {role.role === 'admin' ? <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <HiChartPie className="text-3xl text-blue-500 mr-4" />
            <div>
              <h2 className="text-lg font-semibold">Total Blogs</h2>
              <p className="text-gray-600 text-xl">{blogs?.length || 0}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <HiUsers className="text-3xl text-green-500 mr-4" />
            <div>
              <h2 className="text-lg font-semibold">Total Users</h2>
              <p className="text-gray-600 text-xl">{users?.length || 0}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <HiDocumentText className="text-3xl text-yellow-500 mr-4" />
            <div>
              <h2 className="text-lg font-semibold">Pending Approvals</h2>
              <p className="text-gray-600 text-xl">5</p>
            </div>
          </div>
        </div>
        <div className="mt-6"></div>
      </main> : <>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="stat">
            <div className="stat-title">Total Blogs</div>
            <div className="stat-value">{totalBlogs}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Likes</div>
            <div className="stat-value">0</div>
          </div>
          <div className="stat">
            <div className="stat-title">Comments</div>
            <div className="stat-value">0</div>
          </div>
        </div>
        <div className="">
          <h2 className="text-xl font-bold text-center pt-3">Recent Posts</h2>
          <ul className="mt-4 space-y-2">
            {myBlogs?.map((post, index) => (
              <li key={index} className="border-b py-2 text-gray-600">
                <span className="font-semibold">{post.title}</span>
                <p className="text-sm text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </div> </>
      }
    </>
  );
};

export default Dashboard;
