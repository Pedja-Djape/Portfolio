import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";


function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Portfolio />
			<Skills />

			<SocialLinks />
		</div>
	);
}

export default App;
