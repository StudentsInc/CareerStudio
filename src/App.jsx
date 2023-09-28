import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PersonalityReport} from "./pages"
import { MainLayout } from "./layout/MainLayout"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/personality-report" element={<PersonalityReport />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App