import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPass from "./pages/ForgotPass";
import ResetPass from "./pages/ResetPass";
function App() {
	return (
		<AppLayout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signUp' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/forgotPassword' element={<ForgotPass />} />
				<Route path='/resetPassword' element={<ResetPass />} />
			</Routes>
		</AppLayout>
	);
}

export default App;
