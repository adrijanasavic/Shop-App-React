import React, { Component } from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import Header from "./Header";
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./Home";
import Gallery from "./Gallery";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";


function App() {
    return (
        <BrowserRouter>
            <Header / >
                
            <Route path='/' exact component={Home}></Route>
            <Route path='/gallery' component={Gallery}></Route>
            <Route path='/aboutus' component={AboutUs}></Route>
            <Route path='/contactus' component={ContactUs}></Route>

        </BrowserRouter>
    )
}

export default App;