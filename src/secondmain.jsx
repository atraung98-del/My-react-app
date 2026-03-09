import './index.css'
import App from "./App.jsx";
import Gallery  from './header.jsx';
import FormData from './AboutLion.jsx';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Signup from './signinup.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
<div>
  
  {/* <StrictMode>
    <App/>
  </StrictMode>,
  <StrictMode>
    <Gallery/>
  </StrictMode>
  <StrictMode>
    <FormData/>
  </StrictMode>, */}
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  
  </div>
)
