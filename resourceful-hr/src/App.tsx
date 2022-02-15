import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import Upload from "./pages/upload";
import RequireAuth from "./Routes/requireAuth";
import Auth from "./pages/auth";
import './App.css';
import ErrorBoundary from "./pages/Error/error-boundary";


function App() {
  return (
    <div>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path='/auth' element={<Auth></Auth>}></Route>
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;

