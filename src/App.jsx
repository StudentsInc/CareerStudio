import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Dashboard } from "./pages"
import { MainLayout } from "./layout/MainLayout"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/settings" element={<></>} />
                    <Route path="/bookings" element={<></>} />
                    <Route path="/school" element={<></>} />
                    <Route path="/school" element={<></>} />
                    <Route path="/career" element={<></>} />
                    <Route path="/major" element={<></>} />
                    <Route path="/school" element={<></>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App