import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import MenCatalogue from "./Pages/MenCatalogue";
import WomenCatalogue from "./Pages/WomenCatalogue";
import Contact from "./Pages/Contact";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/men" element={<MenCatalogue />} />
					<Route path="/women" element={<WomenCatalogue />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
