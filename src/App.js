import * as ReactDOM from "react-dom";
import './index.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import{Work}from './pages/howwork';
import Home from "./pages/Home";
// import Error from "./pages/Error";
import Header from './component/header'

export default function App() {
  return (
<>

<Router>
<Header/>
<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/howwork" element={<Work/>} />
    {/* <Route path='*' element={<Error />} /> */}
</Routes>
</Router>
    </>

  );
}
