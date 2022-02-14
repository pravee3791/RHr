import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stores/store";
import Home from "./pages/home";
import Upload from "./pages/upload";
import './App.css';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/upload' element={<Upload></Upload>}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

