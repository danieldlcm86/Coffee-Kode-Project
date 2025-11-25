import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
                <main style={{ minHeight: "70vh" }}>
                    {children}
                </main>
            <Footer />
        </>
    );
}
