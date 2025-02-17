import { useEffect, useState } from "react";
import { HiChartPie, HiDocumentText, HiUsers, HiPencil, HiTrash } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs) || [];
  const users = useSelector((state) => state.user.userDetail) || [];
  const role = useSelector((state) => state.user.userId) || {};
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    if (role?.name) {
      const allBlogs = blogs.filter((item) => item?.author === role?.name);
      setTotalBlogs(allBlogs.length);
      setMyBlogs(allBlogs);
    }
  }, [blogs, role]);

  const handleEdit = (id) => {
    console.log("Edit blog with ID:", id);
    // Implement edit functionality here
  };

  const handleDelete = (id) => {
    console.log("Delete blog with ID:", id);
    // Implement delete functionality here
  };

  return (
    <>
      {role.role === "admin" ? (
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <HiChartPie className="text-3xl text-blue-500 mr-4" />
              <div>
                <h2 className="text-lg font-semibold">Total Blogs</h2>
                <p className="text-gray-600 text-xl">{blogs.length}</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <HiUsers className="text-3xl text-green-500 mr-4" />
              <div>
                <h2 className="text-lg font-semibold">Total Users</h2>
                <p className="text-gray-600 text-xl">{users.length}</p>
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
        </main>
      ) : (
        <div className="p-2">
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="stat border rounded-lg">
              <div className="stat-title">Total Blogs</div>
              <div className="stat-value">{totalBlogs}</div>
            </div>
            <div className="stat border rounded-lg">
              <div className="stat-title">Likes</div>
              <div className="stat-value">0</div>
            </div>
            <div className="stat border rounded-lg">
              <div className="stat-title">Comments</div>
              <div className="stat-value">0</div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-center pt-3">Recent Posts</h2>
            <ul className="mt-4 space-y-2">
              {myBlogs.map((post) => (
                <li key={post._id} className="border py-2 text-gray-600 flex flex-wrap justify-between px-2 gap-2 items-center">
                  <span className="font-semibold">{post?.title}</span>
                  <p className="text-sm text-gray-400">{new Date(post?.createdAt).toLocaleDateString()}</p>
                  <p dangerouslySetInnerHTML={{ __html: post?.description?.substring(0, 50) }} className="text-sm text-gray-400"></p>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(post._id)} className="text-blue-500 hover:text-blue-700">
                      <HiPencil />
                    </button>
                    <button onClick={() => handleDelete(post._id)} className="text-red-500 hover:text-red-700">
                      <HiTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
