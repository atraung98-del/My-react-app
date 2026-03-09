import {Routes,Route} from "react-router-dom";
import Gallery from "./pages/header";
import Signup from "./pages/signinup";
import FormData from "./pages/Signup";
import Location from "./pages/Location";
function App(){
  return (
    <Routes>
      <Route path="/" element={<Gallery/>}/>
      <Route path="/Signup" element={<FormData/>}/>
      <Route path="/signinup" element={<Signup/>}/>
      <Route path="/Location" element={<Location/>}/>
    </Routes>
  )
}
export default App;
