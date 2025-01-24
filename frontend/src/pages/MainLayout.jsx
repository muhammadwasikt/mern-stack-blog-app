import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router'
import { getReq } from '../api/axios';
import { userDetail, userId } from '../redux/reducers/userSlice';
import { useEffect } from 'react';
import { getAllBlogs } from '../redux/reducers/blogSlice';

const MainLayout = () => {

    const token = useSelector(state => state.user.token)

    const dispatch = useDispatch()
    const getAllUsers = async () => {
        const response = await getReq('/user');
        dispatch(userDetail(response))
    }
    const getBlogs = async () => {
        const response = await getReq('/blog');
        dispatch(getAllBlogs(response))
    }
    const getUserDetail = async () => {
        const userResponse = await getReq('/user/protected-route')
        dispatch(userId(userResponse));
    }
    

    useEffect(() => {
        getAllUsers();
        getBlogs();
        if (token?.length > 0 || token ) {
            getUserDetail()
        }
    }, [token])
    
    return (
        <div>
            <Outlet /> 
        </div>
    )
}

export default MainLayout
