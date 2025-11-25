import MainLayout from "./MainLayout";
import { Outlet } from "react-router";

export default function RootLayout() {
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
}
