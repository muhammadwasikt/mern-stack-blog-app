import { useEffect, useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";

const Sidebar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const user = useSelector(state => state.user.userId)
    const { name, role } = user
    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [isMobile])
    const navigate = useNavigate()

    const handleNavigate = () => {
        if (role === 'admin') {
            navigate('/auth/admin')
        } else {
            navigate('/auth/user')
        }
    }
    return (
        <div>
            {isMobile ?
                <div className="drawer z-10 absolute">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <label htmlFor="my-drawer" className="drawer-button bg-primary p-3 text-[40px] text-secandory"><HiBars3BottomLeft /></label>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-primary text-secandory min-h-full w-72 p-4">
                            {/* Sidebar content here */}
                            <li className="hover:bg-secandory hover:text-black w-full rounded-xl">
                                <label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => navigate(handleNavigate)}>
                                    Dashboard
                                </label>
                            </li>
                            <li className="hover:bg-secandory hover:text-black w-full rounded-xl">
                                <label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => navigate('/blog/add')}>
                                    Add New Blog
                                </label>
                            </li>
                            {role === 'admin' && <li className="hover:bg-secandory hover:text-black w-full rounded-xl"><label htmlFor="my-drawer" aria-label="close sidebar" onClick={() => navigate('/all-users')}>
                                Users List
                            </label></li>}
                            <li className="hover:bg-secandory hover:text-black w-full rounded-xl"><Link to='/'>Back To Home</Link></li>
                        </ul>
                    </div>
                </div>
                :
                <div>
                    <div className="navbar bg-primary ">
                        <Link className="text-xl text-secandory px-2">{role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}</Link>
                    </div>
                    <ul className="menu bg-primary text-secandory min-h-screen w-60 p-4">
                        {/* Sidebar content here */}
                        <li className="hover:bg-secandory hover:text-black w-full rounded-xl"><Link to={role === 'admin' ? '/auth/admin' : '/auth/user'}>Dashboard</Link></li>
                        <li className="hover:bg-secandory hover:text-black w-full rounded-xl"><Link to='/blog/add'>Add New Blog</Link></li>
                        {role === 'admin' && <li className="hover:bg-secandory hover:text-black w-full rounded-xl"><Link to='/all-users'>Users List</Link></li>}
                        <li className="hover:bg-secandory hover:text-black w-full rounded-xl"><Link to='/'>Back To Home</Link></li>
                    </ul>
                </div>}
        </div>
    );
};

export default Sidebar;
