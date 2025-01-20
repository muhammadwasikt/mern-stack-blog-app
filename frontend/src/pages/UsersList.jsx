import { useEffect } from "react";
import { getReq } from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { userDetail } from "../redux/reducers/userSlice";

const UsersList = () => {

    const users = useSelector(state => state.user.userDetail)
    return (
        <div className="container mx-auto px-4 py-6">
            {users ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.reverse().map((user, index) => (
                        <div
                            className="card bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            key={index}
                        >
                            <div className="card-body p-6">
                                <h2 className="card-title text-lg font-semibold text-gray-800">
                                    {user.name || "Unknown User"}
                                </h2>
                                <p className="text-gray-600">{user.email || "No email provided"}</p>
                                <p className="text-sm text-gray-500">
                                    {user.createdAt
                                        ? new Date(user.createdAt).toLocaleDateString()
                                        : "No date available"}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-gray-500">Loading...</p>
                </div>
            )}
        </div>
    )
}

export default UsersList
