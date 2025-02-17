import { useSelector } from 'react-redux';
import Card from '../../../components/common/Card';
import { useState } from "react"
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";

const OwnBlogs = () => {

  const blogs = useSelector(state => state.blog.blogs)
  let blogList = []
  blogs?.forEach(element => {
    blogList.unshift(element)
  });
  const [gridView, setGridView] = useState(true)
  const user = useSelector(state => state.user.userId)

  const filterBlogs = blogs?.filter(blog => blog.author === user.name)

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between p-2">
        <div className="w-full">
          <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>
        </div>
        {filterBlogs?.length > 0 && <div className="max-lg:hidden absolute right-4 top-[70px]">
          <button onClick={() => setGridView(!gridView)} className="btn ">{!gridView ? (
            <IoGridOutline title="Grid View" className="text-2xl" />
          ) : (
            <CiBoxList title="List View" className="text-2xl" />
          )}</button>
        </div>}
      </div>
      <div className='w-full'>
        {filterBlogs?.length > 0 ?
          <div className={gridView ? "p-6" : "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4"}>
            {
              filterBlogs?.map((data, index) => (
                <Card
                  key={index}
                  file={data?.file}
                  description={{ __html: data?.description }}
                  category={data?.category}
                  title={data?.title}
                  id={data?._id}
                  date={data?.createdAt}
                  author={data?.author}
                  path='auth/blog-detail'
                  admin />
              ))
            }
          </div> : <div className="h-screen w-full flex justify-center items-center"><p>Have you not created any blog</p></div>}
      </div>
    </div>
  )
}

export default OwnBlogs
