// pages/Home.jsx or components/CardSection.jsx
import Section from "../sections/Section";
import InfoCard from "./InfoCard";
import { Eye, Globe, ShieldAlert, Network } from "lucide-react"; // Or use your own icons

const cardData = [
    {
        icon: <Eye />,
        title: "Your IP Exposes You",
        description: "Your IP address can reveal your approximate location, internet service provider, and potentially your identity.",
    },
    {
        icon: <Globe />,
        title: "Content Restrictions",
        description: "Many websites and services restrict content based on your IP address and geographic location.",
    },
    {
        icon: <Network />,
        title: "Privacy Concerns",
        description: "Your browsing habits can be tracked and monitored through your IP address by advertisers and other entities.",
    },
    {
        icon: <ShieldAlert />,
        title: "Security Risks",
        description: "Hackers can use your IP address as a starting point for attacks on your network and devices.",
    },
];

const CardSection = () => {
    return (
        <Section heading="Why Knowing Your IP Matters"
         classNames={{
            section: " ",
        }}
        
        >
            <div className="grid grid-cols-1  md:grid-cols-2 gap-4 p-4">
                {cardData.map((card, index) => (
                    <InfoCard key={index} {...card} />
                ))}
            </div>
        </Section>

    );
};

export default CardSection;
