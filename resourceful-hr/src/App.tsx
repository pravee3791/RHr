import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stores/store";
import Home from "./pages/home";
import Upload from "./pages/upload";
import ProtectedRoute from "./Routes/protectedRoute";
import Auth from "./pages/auth";
import './App.css';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Fragment>
            <Routes>
              <Route path='/authenticate' element={<Auth></Auth>}></Route>
              <ProtectedRoute redirectTo='/authenticate'>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/upload' element={<Upload></Upload>}></Route>
              </ProtectedRoute>
            </Routes>
          </Fragment>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

