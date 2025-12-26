import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { SelectField } from "../shared/SelectField";

type AddUserFormValues = {
  username: string;
  tradeSector: string;
  role: string;
  status: string;
  client: string;
};

type Props = {
  onClose: () => void;
};

export function AddUser({ onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddUserFormValues>({
    defaultValues: {
      username: "",
      tradeSector: "",
      role: "",
      status: "",
      client: "",
    },
  });

  const onSubmit = async (data: AddUserFormValues) => {
    console.log("Create user payload:", data);
    // API call here
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      {/* Modal */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Create New User
          </h2>
          <button onClick={onClose} className="cursor-pointer">
            <IoClose className="text-xl text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {/* Username */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              {...register("username", {
                required: "Username is required",
              })}
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter username"
            />
            {errors.username && (
              <p className="text-xs text-red-500 mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Trade Sector */}
          <SelectField
            label="Trade Sector"
            error={errors.tradeSector?.message}
            {...register("tradeSector", {
              required: "Trade sector is required",
            })}
            options={[
              "Manufacturing",
              "Retail",
              "Healthcare",
              "Finance",
              "Technology",
            ]}
          />

          {/* Role */}
          <SelectField
            label="Role"
            error={errors.role?.message}
            {...register("role", {
              required: "Role is required",
            })}
            options={[
              "Admin",
              "HR Manager",
              "Payroll Manager",
              "Employee",
            ]}
          />

          {/* Status */}
          <SelectField
            label="Status"
            error={errors.status?.message}
            {...register("status", {
              required: "Status is required",
            })}
            options={["Active", "Inactive", "Pending"]}
          />

          {/* Client */}
          <SelectField
            label="Assigned Client"
            error={errors.client?.message}
            {...register("client", {
              required: "Client is required",
            })}
            options={[
              "Bluewave Retail",
              "Greenfield Finance",
              "Apex Logistics",
              "Northstar Manufacturing",
            ]}
          />

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-md border border-gray-300 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 text-sm rounded-md bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-60 cursor-pointer"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
