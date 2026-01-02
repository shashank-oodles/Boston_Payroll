import { FaBell } from "react-icons/fa";

type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
};

type Props = {
  notifications: Notification[];
  onClearAll?: () => void;
};

export function NotificationsPanel({ notifications, onClearAll }: Props) {
  return (
    <div
      className="
        absolute right-4 top-16 z-50
        w-[22rem] sm:w-[26rem]
        bg-white rounded-2xl
        shadow-2xl border border-gray-100
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Notifications
        </h3>
        {onClearAll && (
          <button
            onClick={onClearAll}
            className="text-orange-500 text-sm font-medium hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="h-px bg-gray-100" />

      {/* List */}
      <div className="max-h-[22rem] overflow-y-auto">
        {notifications.length === 0 ? (
          <p className="text-sm text-gray-500 px-5 py-6">
            No notifications
          </p>
        ) : (
          notifications.map((item, index) => (
            <div key={item.id}>
              <div className="flex gap-4 px-5 py-4">
                {/* Icon */}
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <FaBell className="text-orange-500 text-sm" />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-800 text-sm leading-snug">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600 leading-snug">
                    {item.description}
                  </p>
                  <span className="text-xs text-gray-400 mt-1">
                    {item.time}
                  </span>
                </div>
              </div>

              {index !== notifications.length - 1 && (
                <div className="h-px bg-gray-100 mx-5" />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
