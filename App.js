import "./App.css";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Footer from "./compoents/Footer";
import Navbar from "./compoents/Navbar";
import SecondPage from "./compoents/SecondPage";
import TopPage from "./compoents/TopPage";
import Info from './compoents/Info';
import Counselling from "./compoents/Counselling";
import Activities from "./compoents/Activities";
import Social from "./compoents/Social";
function App() {
  return (
    <div className="App">
      <Router>
        <TopPage />
        <Navbar/>
      <Routes>
        <Route exact path="/" element={ <SecondPage />}></Route>
        <Route exact path="/info" element={ <Info />}></Route>
        <Route exact path="/counselling" element={ <Counselling/>}></Route>
        <Route exact path="/activity" element={ <Activities/>}></Route>
      </Routes>
      <Social/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
