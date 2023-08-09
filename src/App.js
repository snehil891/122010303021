import "./App.css";
import {
HashRouter,
} from "react-router-dom";
import SingleTrain from "./components/SingleTrain";
import MultiTrain from "./components/MultiTrain";
import Navbar from "./components/navbar";

function App() {
return (
	<>
	{/* This is the alias of BrowserRouter i.e. Router */}
	<HashRouter>
		<Navbar/>
		<section id="single">
			<SingleTrain/>
		</section>
		<section id="multi">
			<MultiTrain/>
		</section>
	</HashRouter>
	</>
);
}

export default App;