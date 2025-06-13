
import { FaCheckCircle, FaExclamationTriangle, FaLaptop } from "react-icons/fa";

const notifications = [
  {
    icon: <FaExclamationTriangle className="text-yellow-500" />,
    title: "Data usage alert",
    description: "You've used 65% of your monthly data allocation.",
    time: "2 hours ago",
  },
  {
    icon: <FaCheckCircle className="text-green-500" />,
    title: "Payment successful",
    description: "Your monthly subscription payment was processed successfully.",
    time: "Yesterday",
  },
  {
    icon: <FaLaptop className="text-blue-500" />,
    title: "New device connected",
    description: "Smart TV was connected to your account from 192.168.1.104.",
    time: "2 days ago",
  },
];

export default function RecentNotifications() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Notifications</h3>
        <a href="#" className="text-sm text-blue-500 hover:underline">
          View All
        </a>
      </div>
      <ul className="space-y-5">
        {notifications.map((note, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-1">{note.icon}</div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-800">{note.title}</h4>
              <p className="text-sm text-gray-500">{note.description}</p>
            </div>
            <div className="text-sm text-gray-400 whitespace-nowrap">{note.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
