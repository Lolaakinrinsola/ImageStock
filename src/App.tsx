import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import Home from './pages/Home';
import Mystock from "./pages/Mystock";
import Notfound from "./pages/Notfound";
import Single from "./pages/Single";


function App() {
 
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/my-stocks' element={<Mystock/>}/>
        <Route path='/images/:id' element={<Single/>}/>
      </Routes>
        </Layout>
      {/* <Home/> */}
    </Router>
  );
}

export default App;
