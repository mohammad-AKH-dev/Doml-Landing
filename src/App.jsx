import "./App.css";
import Companies from "./components/Companies";
import EnterPrice from "./components/EnterPrice";
import Explore from "./components/Explore";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Team from "./components/Team";
import Sidebar from "./components/modules/Sidebar";
function App() {

  return ( 
     <div className="main-page px-8">
      <Navbar/>
      <Sidebar/>
      <Landing/>
      <Companies/>
      <Product/>
      <Explore/>
      <Team/>
      <EnterPrice/>
     </div>
  );
}

export default App;
