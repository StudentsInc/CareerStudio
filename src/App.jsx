import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Dashboard } from "./pages"
import { MainLayout } from "./layout/MainLayout"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App