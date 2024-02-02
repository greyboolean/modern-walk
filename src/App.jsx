import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Clothing from "./pages/Clothing";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/*" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="mens-clothing" element={<Clothing category="men"/>} />
					<Route path="womens-clothing" element={<Clothing category="women"/>} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
