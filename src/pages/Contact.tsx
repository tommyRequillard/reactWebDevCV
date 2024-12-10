import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import ContactForm from "../components/contact/ContactForm.tsx"


export default function Contact() {
    return (
        <>
            <MainLayout children={""} />
            <MainArea>
                <ContactForm />
            </MainArea>
        </>
    )
}