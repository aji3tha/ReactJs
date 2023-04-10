// Jsx is the default export so mentione as separate and other exported functions written in the {}
import "./Assets/Sass/Common.css"
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./Pages/Home";
import Basics from "./Pages/Basics";
import Projects from "./Pages/Projects";
import Hooks from "./Pages/Hooks";
import Classes from "./Pages/Classes";

function App(props) {
  return (
<>
{/* Routers implemented 
install npm i react-router-dom@ */}
<BrowserRouter>
<header>
<Link to="/">Home</Link>
<Link to="/basics">Basics</Link>
<Link to="/classes">Classes</Link>
<Link to="/hooks">Hooks</Link>
<Link to="/projects">Projects</Link>
</header>
<h1>React Basic Learing</h1>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/basics" element={<Basics />}/>
  <Route path="/projects" element={<Projects />}/>
  <Route path="/hooks" element={<Hooks />}/>
  <Route path="/classes" element={<Classes />}/>
</Routes>
</BrowserRouter>
</>
  );
}
export default App;
