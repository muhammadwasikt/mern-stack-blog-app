import { useEffect, useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";

const Sidebar = ({ mobileView }) => {

    const user = useSelector(state => state.user.userId)
    const { role } = user

    const navigate = useNavigate()
    return (
        <div>
            {mobileView ?
                <div className="drawer hidden max-sm:flex">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <label htmlFor="my-drawer" className="drawer-button bg-primary p-3 text-[40px] text-secandory"><HiBars3BottomLeft /></label>
                    <div className="drawer-side z-10">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-primary text-secandory min-h-full w-72 p-4 ">
                            {/* Sidebar content here */}
                            <li className="text-xl hover:bg-secandory hover:text-black w-full rounded-xl">
                                <label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => navigate('/auth/dashboard')}>
                                    Dashboard
                                </label>
                            </li>
                            <li className="text-xl hover:bg-secandory hover:text-black w-full rounded-xl">
                                <label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => navigate('/blog/add')}>
                                    Add New Blog
                                </label>
                            </li>
                            {role === 'Admin' && <li className="text-xl hover:bg-secandory hover:text-black w-full rounded-xl"><label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => navigate('/all-users')}>
                                Users List
                            </label></li>}
                            {role === 'user' ? <li className="text-xl hover:bg-secandory hover:text-black w-full rounded-xl"><label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => navigate('/my-blogs')}>
                                My Blogs
                            </label></li>
                                :
                                <li className="text-xl hover:bg-secandory hover:text-black w-full rounded-xl"><label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => navigate('/blogs-list')}>
                                    All Blogs
                                </label></li>
                            }
                            <li className="text-xl hover:bg-secandory hover:text-black w-full rounded-xl"><Link to='/'>Back To Home</Link></li>
                        </ul>
                    </div>
                </div>
                :
                <div className="max-sm:hidden">
                    <ul className="menu bg-primary text-secandory min-h-screen w-60 p-4">
                        {/* Sidebar content here */}
                        <li className="text-xl hover:bg-secandory hover:text-black w-full rounded-xl"><Link to='/auth/dashboard'>Dashboard</Link></li>
                        <li className="text-xl hover:bg-secandory hover:text-black w-full rounded-xl"><Link to='/blog/add'>Add New Blog</Link></li>
                        {role === 'Admin' && <li className="text-xl hover:bg-secandory hover:text-black w-full rounded-xl"><Link to='/all-users'>Users List</Link></li>}
                        {role === 'user' ? <li className="text-xl hover:bg-secandory hover:text-black w-full rounded-xl"><label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => navigate('/my-blogs')}>
                            My Blogs
                        </label></li>
                            :
                            <li className="text-xl hover:bg-secandory hover:text-black w-full rounded-xl"><label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => navigate('/blogs-list')}>
                                All Blogs
                            </label></li>
                        }
                        <li className="text-xl hover:bg-secandory hover:text-black w-full rounded-xl"><Link to='/'>Back To Home</Link></li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default Sidebar;
