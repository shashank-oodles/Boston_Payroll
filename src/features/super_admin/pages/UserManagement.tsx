import { useDispatch, useSelector } from "react-redux";
import { toggleAddUser } from "../redux/uiSlice";
import { UserTable, UserTableToolbar, UserStats, UserStatusTabs, AddUser } from "../components/index";
import { users } from "../constants";
import { MdAdd } from "react-icons/md";

export function UserManagement() {
    const dispatch = useDispatch();
    const addUser = useSelector((state: any) => state.superAdminUi.addUser);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold text-gray-700'>User Management</h1>
                    <p className='text-sm text-gray-600'>Create and manage payroll administrators, client users, and employee accounts.</p>
                </div>
                <button onClick={() => dispatch(toggleAddUser())} className="flex items-center gap-2 bg-orange-500 text-white px-4 rounded-md cursor-pointer">
                    <MdAdd className="text-2xl" />
                    <p>Add User</p>
                </button>
            </div>
            <UserStats />
            <UserStatusTabs />
            <UserTableToolbar />
            <UserTable data={users} />
            {addUser && <AddUser onClose={() => dispatch(toggleAddUser())} />}
        </div>
    );
}
