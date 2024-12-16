import InternetSites from "../components/sellingServices/internetSites";
import MainLayout from "../layouts/MainLayout";
import MainArea from "../layouts/MainArea.tsx";

export default function Services() {
    return (
        <>
            <MainLayout children={""} />
            <MainArea >
                <InternetSites />
            </MainArea>
        </>
    )
}