import { Outlet } from "react-router"
import { Navbar, Footer } from "../components"
export const MainLayout = () => {
    return (
        <div className="relative overflow-hidden">
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

