import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Loader from "./components/Loader";
const LazyAOS = lazy(() => import("./components/LazyAos"));
const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPass = lazy(() => import("./pages/ForgotPass"));
const ResetPass = lazy(() => import("./pages/ResetPass"));

function App() {
	return (
		<AppLayout>
			<Suspense fallback={<Loader />}>
				<LazyAOS />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/signUp' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					<Route path='/forgotPassword' element={<ForgotPass />} />
					<Route path='/resetPassword' element={<ResetPass />} />
				</Routes>
			</Suspense>
		</AppLayout>
	);
}

export default App;
