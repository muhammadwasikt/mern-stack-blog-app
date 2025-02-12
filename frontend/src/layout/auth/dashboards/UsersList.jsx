import { useSelector } from "react-redux";

const UsersList = () => {
    const users = useSelector((state) => state.user.userDetail);

    return (
        <div className="container mx-auto px-4 py-6 ">
            {users && users.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg">
                        <thead className="bg-secandory">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left">S.No</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Created At</th>
                            </tr>
                        </thead>
                        <tbody className="min-h-screen overflow-scroll scrollbar-hide">
                            {users.map((user, index) => (
                                <tr
                                    key={user.id || index}
                                    className="hover:bg-gray-100 transition-colors duration-200"
                                >
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {user.name || "Unknown User"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {user.email || "No email provided"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm">
                                        {user.createdAt ? (
                                            <>
                                                <div>
                                                    {new Date(user.createdAt).toLocaleDateString()}
                                                </div>
                                                <div>
                                                    {new Date(user.createdAt).toLocaleTimeString()}
                                                </div>
                                            </>
                                        ) : (
                                            "No date available"
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center">
                    {users ? (
                        <p className="text-gray-500">No users available</p>
                    ) : (
                        <p className="text-gray-500">Loading...</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default UsersList;
