import React from 'react';
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from "../home";
import { Provider } from "react-redux";
import store from "../../stores/store";


afterEach(cleanup);

it('reders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render<any, any>(<BrowserRouter>
        <Provider store={store}>
            <Home></Home>
        </Provider>
    </BrowserRouter>, div)
})

it('checks if home exists', () => {
    const HomePage = render(<BrowserRouter>
   <Provider store={store}>
            <Home></Home>
        </Provider>
    </BrowserRouter>
    );
    const home = HomePage.container.querySelector('.home');
    expect(home).toBeTruthy();
    expect(home).toBeDefined();
})

it(' Home Page matches snapshot', () => {
    const tree = renderer.create(<BrowserRouter>
     <Provider store={store}>
            <Home></Home>
        </Provider>
    </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})







