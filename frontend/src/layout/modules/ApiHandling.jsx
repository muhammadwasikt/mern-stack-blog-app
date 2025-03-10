import { useDispatch, useSelector } from 'react-redux';
import { getReq } from '../../api/axios';
import { userDetail, userId } from '../../redux/reducers/userSlice';
import { useEffect, useCallback } from 'react';
import { getAllBlogs } from '../../redux/reducers/blogSlice';

const ApiHandling = () => {
    const token = useSelector(state => state?.user.token);
    const dispatch = useDispatch();

    const getAllUsers = useCallback(async () => {
        const response = await getReq('/user');
        dispatch(userDetail(response));
    }, [dispatch]);

    const getBlogs = useCallback(async () => {
        const response = await getReq('/blog');
        dispatch(getAllBlogs(response));
    }, [dispatch]);

    const getUserDetail = useCallback(async () => {
        const userResponse = await getReq('/user/protected-route');
        dispatch(userId(userResponse));
    }, [dispatch]);

    useEffect(() => {
        getAllUsers();
        getBlogs();
        if (token?.length > 0) {
            getUserDetail();
        }
    }, [token, getAllUsers, getBlogs, getUserDetail]); 

    return <div></div>;
};

export default ApiHandling;
