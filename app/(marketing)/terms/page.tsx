import { Button } from "@/components/ui/button"

const privacyContent = {
    buttonText: "Terms and Conditions",
    title: "Vera's Service Agreement: Your Guide to Smart Shop Management",
    sections: [
        {
            content: "Vera's Service Agreement: Your Guide to Smart Shop Management"
    },
        {
            content: "Within this document, you will find detailed information on various aspects of our business relationship, including but not limited to: the proper use of our AI-powered inventory management system, your rights and responsibilities as a user, the scope and limitations of our Services, intellectual property rights, data usage and protection, payment terms, account management, and dispute resolution procedures. We have meticulously designed these Terms to ensure a fair, transparent, and mutually beneficial relationship as we collaborate to optimize your shop's performance and streamline your inventory management processes. It is crucial to note that our Services utilize advanced artificial intelligence and machine learning algorithms to provide predictive analytics and automated inventory optimization. As such, specific sections of these Terms address the unique considerations that arise from the use of AI technology, including data inputs, algorithm training, and the interpretation of AI-generated recommendations. We emphasize that while our AI system is designed to enhance your inventory management, it is intended to supplement, not replace, human decision-making in your business operations."
        },
        {
            content: "These Terms also delineate the acceptable use policy for our Services, outlining prohibited activities and potential consequences for violations. We have included provisions related to user-generated content, third-party integrations, and the responsibilities of both parties in maintaining the security and integrity of the system. Additionally, we address matters of confidentiality, indemnification, limitation of liability, and the procedures for termination or suspension of services. In recognition of the dynamic nature of both technology and business environments, we reserve the right to modify these Terms from time to time. Any such modifications will be effective immediately upon posting the updated Terms on our website or within our application. We will make reasonable efforts to notify you of any material changes, but it remains your responsibility to review these Terms periodically. Your continued use of our Services following the posting of revised Terms signifies your acceptance of such changes."
        },
        {
            content: "We strongly encourage you to read this document carefully and in its entirety. If you have any questions or concerns regarding these Terms, we urge you to contact our customer support team for clarification before using our Services. It is important to understand that if you do not agree with any part of these Terms, you should refrain from accessing or using our Services. By providing this comprehensive set of Terms and Conditions, we aim to establish a clear framework for our business relationship, fostering trust, and ensuring mutual understanding as we work together to revolutionize your inventory management practices. We are committed to delivering exceptional service while maintaining the highest standards of legal and ethical business conduct. Your success is our priority, and we believe that a transparent and well-defined agreement is fundamental to achieving our shared goals in the realm of AI-powered inventory management."
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