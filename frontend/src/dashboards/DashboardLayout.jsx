import { Outlet, useNavigate } from 'react-router'
import Header from '../components/Header';
import Sidebar from '../components/common/Sidebar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const DashboardLayout = () => {
    const user = useSelector(state => state.user.userId); 
    const navigate = useNavigate()

    useEffect(()=>{
        if(!user){
            navigate('/auth/sign-in')
        }else if (user?.role === "admin") {
            navigate('/auth/admin')
        }else if (user?.role === "user") {
            navigate('/auth/user')
        }
    },[user])
    return (
        <div className='w-full flex'>
            <Sidebar />
            <div className='w-full'>
                <Header dashboard />
                <div className='h-screen overflow-scroll scrollbar-hide'>
                <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
