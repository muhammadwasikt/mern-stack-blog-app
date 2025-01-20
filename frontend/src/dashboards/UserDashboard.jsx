import { useSelector } from "react-redux"
import { useState } from "react"
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import Card from "../components/common/Card";

const UserDashboard = () => {

  const blogs = useSelector(state => state.blog.blogs)
  const user = useSelector(state => state.user.userId)
  const [gridView, setGridView] = useState(true)

  const filterBlogs = blogs?.filter(blog => blog.author === user.name)

  return (
    <div>
      <div className="w-full flex items-center justify-between p-2">
        <div className="">
          <h1 className="text-3xl font-bold text-center">Welcome, {user?.name}</h1>
        </div>
        <div className="max-lg:hidden">
          <button onClick={() => setGridView(!gridView)} className="btn ">{gridView ? (
            <IoGridOutline title="Grid View" className="text-2xl" />
          ) : (
            <CiBoxList title="List View" className="text-2xl" />
          )}</button>
        </div>
      </div>
      <div className={gridView ? "" : "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-2"}>
        {filterBlogs.length > 0 ? 
        filterBlogs?.reverse().map((data, index) => (
          <Card
            key={index}
            file={data?.file[0]}
            description={{ __html: data?.description }}
            category={data?.category}
            title={data?.title}
            id={data?._id}
            admin />
        )) : <div className="h-screen w-full flex justify-center items-center"><p>Have you not created any blog</p></div>}
      </div>
    </div>
  )
}

export default UserDashboard
