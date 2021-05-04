import React, { Component } from "react";
import "./css/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from './Gallery'
export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand txt-info" href="#">
            Shop App
          </a>
          <button
            class="navbar-toggler border border-info text-info"
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            {this.state.show ? <MenuIcon /> : <CloseIcon />}
          </button>
          <div
            class={
              this.state.show
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse active"
            }
          >
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/gallery">
                Gallery                
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/aboutus">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contactus">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </Router>
    );
  }
}
