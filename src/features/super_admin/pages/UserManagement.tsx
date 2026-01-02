import { useDispatch, useSelector } from "react-redux";
import { toggleAddUser } from "../redux/uiSlice";
import {
  UserStats,
  UserStatusTabs,
  UserTableToolbar,
  UserTable,
  UserCardList,
  AddUser,
} from "../components";
import { users } from "../constants";
import { MdAdd } from "react-icons/md";

export function UserManagement() {
  const dispatch = useDispatch();
  const addUser = useSelector((s: any) => s.superAdminUi.addUser);

  return (
    <div className="relative pb-24 lg:pb-4 max-w-full overflow-x-hidden">
      {/* HEADER */}
      <div className="mb-4">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
          User Management
        </h1>
        <p className="text-sm text-gray-600">
          Create and manage payroll administrators, client users, and employee accounts.
        </p>
      </div>

      <UserStats />
      <UserStatusTabs />
      <UserTableToolbar />

      {/* MOBILE CARDS */}
      <div className="lg:hidden space-y-4">
        <UserCardList data={users} />
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden lg:block">
        <UserTable data={users} />
      </div>

      {/* MOBILE CTA */}
      <button
        onClick={() => dispatch(toggleAddUser())}
        className="fixed bottom-4 left-4 right-4 z-30 lg:hidden
          bg-orange-500 text-white py-3 rounded-xl font-medium
          flex items-center justify-center gap-2"
      >
        <MdAdd className="text-xl" />
        Add User
      </button>

      {addUser && <AddUser onClose={() => dispatch(toggleAddUser())} />}
    </div>
  );
}
