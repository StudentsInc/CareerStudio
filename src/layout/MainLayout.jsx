import { Outlet } from "react-router"
import { Navbar, Footer } from "../components"
export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

