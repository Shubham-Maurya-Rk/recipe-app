import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import SingleCategory from "./components/SingleCategory";
import CategoriesList from "./components/CategoriesList";
import Recipe from "./components/Recipe";

function App() {
  return (<>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
        <Route exact path="/" index element={<CategoriesList/>}/>
        <Route exact path="/category/:category" element={<SingleCategory/>}/>
        <Route exact path="/area/:area" element={<SingleCategory/>}/>
        <Route exact path="/recipe/:recipeid" element={<Recipe/>}/>
        <Route exact path="/random" element={<Recipe/>}/>
        <Route exact path="/search/:search" element={<SingleCategory/>}/>
      </Routes>
    </Router>
  </>);
}

export default App;
