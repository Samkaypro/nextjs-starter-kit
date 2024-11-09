import ResourceLanding from "@/components/sections/resources-landing";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const terms = [
    {
        buttonText: "Terms and Conditions",
        title: "VendCliq Service Agreement: Your Guide to Smart Shop Management",
        description: "Welcome to VendCliq Terms and Conditions. This comprehensive document outlines the agreement between VendCliq Africa and you, our valued shop owner. Here, you'll find detailed information on how to use our AI-powered inventory management system, your rights and responsibilities, and what you can expect from our service. We've designed these terms to ensure a fair, transparent, and mutually beneficial relationship as we work together to optimize your shop's performance.",
        ctaText: "Read Terms",
        link: "/terms",
        bgColor: "bg-[#4052A3]",
        textColor: "text-white"
    },
    {
        buttonText: "Privacy Policy",
        title: "Safeguarding Your Information: VendCliq Privacy Commitment",
        description: "At VendCliq Africa, we take your privacy seriously. Our Privacy Policy is designed to give you a clear understanding of how we handle your information. This document details the types of data we collect, why we collect it, and how we use it to provide and improve our AI-driven inventory management services. We also explain your rights regarding your data, our security measures, and how you can control your information. Our goal is to be transparent and empower you to make informed decisions about your data.",
        ctaText: "Review Policy",
        link: "/privacy",
        bgColor: "bg-white",
        textColor: "text-gray-900"
    },
    {
        buttonText: "Data Protection",
        title: "Securing Your Business Intelligence: VendCliq Data Protection Standards",
        description: "Data is the lifeblood of modern business, and at VendCliq Africa, we treat your data with the utmost care and respect. Our Data Protection document outlines the comprehensive steps we take to safeguard your business information. From state-of-the-art encryption and secure storage practices to regular security audits and compliance with international data protection regulations, we leave no stone unturned in protecting your valuable data. This section also covers our data retention policies, disaster recovery plans, and your rights regarding data portability and deletion.",
        ctaText: "Check Security",
        link: "/protection",
        bgColor: "bg-[#4052A3]",
        textColor: "text-white"
    }
];

export default function Component() {
    return (
        <div>
            <ResourceLanding />
            
            {terms.map((term, index) => (
                <section 
                    key={index} 
                    className={`px-6 py-24 ${term.bgColor}`}
                >
                    <div className="mx-auto max-w-6xl">
                        <div className="flex flex-col items-center text-center">
                            <Button
                                variant="outline"
                                className={`mb-12 ${
                                    term.bgColor === "bg-white"
                                        ? "border-gray-200 text-gray-900 hover:bg-gray-100"
                                        : "border-white/20 text-white hover:bg-white/10"
                                }`}
                            >
                                {term.buttonText}
                            </Button>

                            <div className="mx-auto max-w-4xl space-y-6">
                                <h1 className={`text-4xl font-bold leading-tight md:text-5xl lg:text-6xl ${term.textColor}`}>
                                    {term.title}
                                </h1>
                                <p className={`mx-auto max-w-3xl text-lg leading-relaxed ${
                                    term.bgColor === "bg-white" 
                                        ? "text-gray-600" 
                                        : "text-white opacity-80"
                                }`}>
                                    {term.description}
                                </p>
                            </div>

                            <Link href={term.link} className="mt-12">
                                <Button
                                    className={`${
                                        term.bgColor === "bg-white"
                                            ? "bg-[#4052A3] text-white hover:bg-[#4052A3]/90"
                                            : "bg-[#FFC300] text-black hover:bg-[#FFC300]/90"
                                    }`}
                                >
                                    {term.ctaText}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}