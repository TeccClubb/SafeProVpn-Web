import Button from "../Button/button";
import Section from "../sections/Section";

export default function PricingTable() {
    const plans = [
        {
            name: "Basic",
            price: "$4.99/mo",
            features: [
                "3",
                "50+",
                "Unlimited",
                "Standard",
                true,
                true,
                true,
                false,
                false,
                "Standard",
                true,
            ],
        },
        {
            name: "Pro",
            price: "$7.99/mo",
            features: [
                "7",
                "100+",
                "Unlimited",
                "High Speed",
                true,
                true,
                true,
                true,
                true,
                "Priority",
                true,
            ],
        },
        {
            name: "Premium",
            price: "$13.99/mo",
            features: [
                "10",
                "200+",
                "Unlimited",
                "Ultra Speed",
                true,
                true,
                true,
                true,
                true,
                "24/7 Priority",
                true,
            ],
        },
    ];

    const headers = [
        "Simultaneous Connections",
        "Server Locations",
        "Bandwidth",
        "Speed",
        "Military-grade Encryption",
        "No-logs Policy",
        "Ad & Malware Blocker",
        "Split Tunneling",
        "Dedicated IP",
        "Priority Support",
        "Multi-Platform Support",
    ];

    return (
        <Section heading={"Compare All Plans"} description={"See which SafePro VPN plan is right for you"}   classNames={{section: "bg-slate-50"}} >

        <div className=" w-full  py-10      ">
            <div className="max-w-7xl mx-auto text-center">
                
                 

                <div className="overflow-x-auto rounded-lg shadow-lg">
                    <table className="min-w-full border-collapse border-t border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="text-left py-3 px-4"></th>
                                {plans.map((plan, i) => (
                                    <th
                                        key={i}
                                        className={`text-center py-3 px-4 ${plan.name === "Pro"
                                                ? "bg-slate-100 text-slate-700"
                                                : "bg-white text-gray-700"
                                            }`}
                                    >
                                        <div className="text-xl font-semibold">{plan.name}</div>
                                        <div className="text-lg text-blue-500">{plan.price}</div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {headers.map((header, rowIndex) => (
                                <tr key={rowIndex} className="border-t">
                                    <td className="py-3 px-4 text-left font-medium text-gray-600 bg-white">
                                        {header}
                                    </td>
                                    {plans.map((plan, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`py-3 px-4 text-center ${plan.name === "Pro"
                                                    ? "bg-slate-100 text-slate-700"
                                                    : "bg-white text-gray-700"
                                                }`}
                                        >
                                            {typeof plan.features[rowIndex] === "boolean" ? (
                                                plan.features[rowIndex] ? (
                                                    <span className="text-green-500 font-bold text-lg">✓</span>
                                                ) : (
                                                    <span className="text-red-500 font-bold text-lg">✗</span>
                                                )
                                            ) : (
                                                plan.features[rowIndex]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            <tr className="border-t">
                                <td className="bg-white"></td>
                                {plans.map((plan, i) => (
                                    <td
                                        key={i}
                                        className={`py-4 ${plan.name === "Pro"
                                                ? "bg-slate-100  text-slate-700"
                                                : "bg-white text-gray-700"
                                            }`}
                                    >
                                        <Button variant="outline" size="md"  className="border-2" >
                                            Select Plan
                                        </Button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </Section>
    );
}
