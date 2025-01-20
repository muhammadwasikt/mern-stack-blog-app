import React from 'react'
import LogOutModal from './LogOutModal'
import { useNavigate } from 'react-router'

const ProfileDropdown = ({ userName , role}  ) => {

    const navigate = useNavigate()

    const handleNavigation = () => {
        if (role === 'admin') {
            navigate('/auth/admin')
        } else {
            navigate('/auth/user')
        }
    }
    return (
        <div className='text-black'>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="w-12 h-12 bg-secandory rounded-full flex justify-center items-center avatar online">
                        {userName}
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between" onClick={handleNavigation}>
                            Dashboard
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li onClick={() => document.getElementById('logout_modal').showModal()}><a>Logout</a></li>
                </ul>
            </div>
            <LogOutModal />
        </div>
    )
}

export default ProfileDropdown
