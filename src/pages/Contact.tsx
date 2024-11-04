import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import ContactForm from "../components/contact/ContactForm.tsx"


const Cybersecurity = () => {
    return (
        <>
        <MainLayout children={""}/> 
            <MainArea>
            <ContactForm/>
            </MainArea>
        </>
    )
}

export default Cybersecurity