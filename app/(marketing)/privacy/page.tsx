import { Button } from "@/components/ui/button"

const privacyContent = {
    buttonText: "Privacy Policy",
    title: "Safeguarding Your Information: Vera's Privacy Commitment",
    sections: [
        {
            content: "At Vera Africa (hereinafter referred to as the Company, we, us, or our), we are committed to protecting and respecting your privacy. This Privacy Policy (hereinafter referred to as the Policy) is designed to provide you with comprehensive information regarding our data collection, processing, and usage practices in relation to our AI-driven inventory management services (hereinafter referred to as the Services)."
    },
        {
            content: "The Policy outlines, in detail, the categories of personal and non-personal data we collect, the purposes for which such data is collected, the methods of collection, the legal bases for processing, and the ways in which we utilize this information to enhance and deliver our Services. Furthermore, this document elucidates your rights as a data subject, including but not limited to the right to access, rectify, erase, restrict processing, and port your personal data. We also delineate our robust security measures implemented to safeguard your information against unauthorized access, alteration, disclosure, or destruction. Additionally, this Policy explicates the mechanisms available to you for controlling your information, including options for opting out of certain data processing activities where applicable."
        },
        {
            content: "The scope of this Policy extends to all users of our Services, including customers, potential customers, and visitors to our website. It encompasses data collected through various channels, such as our website, mobile applications, email communications, and direct interactions with our sales and support teams. We want to emphasize that the collection and processing of your data are essential for providing our AI-driven inventory management solutions, which rely on advanced algorithms and machine learning techniques to optimize your supply chain operations. However, we are equally committed to ensuring that such data processing is conducted in a manner that respects your privacy rights and complies with applicable data protection laws and regulations, including but not limited to the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), where applicable."
        },
        {
            content: "In the interest of maintaining the utmost transparency, we undertake to regularly review and update this Policy to reflect any changes in our data processing practices or legal requirements. We strongly encourage you to review this Policy periodically to stay informed about how we collect, use, and protect your information. Should any material changes be made to this Policy, we will notify you through appropriate channels, which may include email notifications or prominent notices on our website. It is important to note that your continued use of our Services following the posting of changes to this Policy will be deemed as your acceptance of those changes. If you do not agree with the terms of this Policy, we kindly ask that you discontinue use of our Services and contact us to discuss your concerns. By providing this detailed information, we aim to ensure transparency in our data practices and empower you to make informed decisions regarding the collection, use, and sharing of your personal information in the context of your engagement with our Services. We are committed to fostering a relationship of trust with our users and believe that clear communication about our privacy practices is fundamental to achieving this goal. Should you have any questions, concerns, or requests regarding this Policy or our privacy practices in general, we encourage you to contact our dedicated Data Protection Officer, whose contact details are provided at the end of this document. We assure you that all inquiries will be addressed promptly and comprehensively, reflecting our unwavering commitment to protecting your privacy and maintaining the security of your personal information."
        }
    ]
}

export default function Component() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-4xl">
                <div className="flex flex-col items-center text-center">
                    {/* Header Button */}
                    <Button
                        variant="outline"
                        className="mb-12 border-[#4052A3] text-[#4052A3] hover:bg-[#4052A3]/10"
                    >
                        {privacyContent.buttonText}
                    </Button>

                    {/* Main Content */}
                    <div className="space-y-8">
                        <h1 className="text-3xl font-bold leading-tight text-[#4052A3] md:text-4xl lg:text-5xl">
                            {privacyContent.title}
                        </h1>

                        {/* Privacy Policy Text */}
                        <div className="space-y-6 text-left">
                            {privacyContent.sections.map((section, index) => (
                                <p
                                    key={index}
                                    className="text-muted-foreground"
                                >
                                    {section.content}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}