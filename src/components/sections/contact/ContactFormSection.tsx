import { ContactForm } from "@/components/ContactForm"
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const ContactFormSection = () => {
    return (
        <Section size="lg" className="bg-secondary">
            <Container className="flex flex-col gap-12 items-center justify-center">
                <div className="flex flex-col gap-2 items-center justify-center max-w-2xl text-center">
                    <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">Have questions? Want to schedule a demo? Send us a message and we’ll get back to you as soon as possible.</p>
                </div>
                <div className="w-full">
                    <ContactForm />
                </div>
            </Container>
        </Section>
    )
}