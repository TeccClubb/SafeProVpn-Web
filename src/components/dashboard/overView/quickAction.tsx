import FeatureCard from "@/components/cardUI/FeatureCard";
import { FaRegCreditCard, FaDownload, FaHeadset } from "react-icons/fa6";
import RecentNotifications from "../RecentNotifications";

const quickActions = [
    {
        icon: <FaRegCreditCard size={24} />,
        title: "Manage Subscription",
        description: "Change plan or update payment method",
    },
    {
        icon: <FaDownload size={24} />,
        title: "Download Reports",
        description: "Access detailed usage reports",
    },
    {
        icon: <FaHeadset size={24} />,
        title: "Contact Support",
        description: "Get help with any issues",
    },
];

export default function QuickActionsAndNotifications() {
    return (
        <div className="space-y-8">
            {/* Quick Actions */}
            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {quickActions.map((action, index) => (
                        <FeatureCard
                            className="bg-white"
                            key={index}
                            icon={
                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                    {action.icon}
                                </div>
                            }
                            title={action.title}
                            description={action.description}
                            align="start"
                        />
                    ))}

                </div>
            </div>

            {/* Notifications */}
            <RecentNotifications />
        </div>
    );
}
