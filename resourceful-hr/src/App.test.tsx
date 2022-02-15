import React from 'react';
import ReactDom from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import App from './App';

it('reders without crashing' , ()=>{
    const div = document.createElement('div');
    ReactDom.render<any,any>(<App></App>,div)
})