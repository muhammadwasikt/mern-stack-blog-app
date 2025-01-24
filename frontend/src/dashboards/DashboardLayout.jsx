import { Outlet } from 'react-router'
import Header from '../components/Header';
import Sidebar from '../components/common/Sidebar';


const DashboardLayout = () => {
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
