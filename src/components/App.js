import React, { Component } from 'react';
import MainNavigation from './MainNavigation.js';
import Main from './Main.js';
import StartScreen from './StartScreen.js';
import Login from './Login.js';

class App extends Component {

  state = {
    menuAnim: "",
    leftTriangleAnim: "",
    rightTriangleAnim: "",
    circleAnim: "",
    animEnd: false,
    isLogged: false,
    loginError: false,
    users: null
  }


  handleShowNavigation = () => {
    const { menuAnim } = this.state;

    if (menuAnim === "menuAnimIn") {
      this.setState({
        menuAnim: "menuAnimOut"
      })
    } else {
      this.setState({
        menuAnim: "menuAnimIn"
      })
    }
  }

  handleStart = () => {
    this.setState(prevState => ({
      leftTriangleAnim: "animated slideOutUp",
      rightTriangleAnim: "animated slideOutDown",
      circleAnim: "animated bounceOut"
    }))
  }

  handleChangeOnAnim = () => {
    this.setState(prevState => ({
      animEnd: true
    }))
  }


  handleLoginSubmit = (e, inputLogin, inputPass) => {
    inputLogin = inputLogin.toLowerCase();
    e.preventDefault();
    if ("dawid" === inputLogin && "placki" === inputPass) {
      this.setState(prevState => ({
        isLogged: !prevState.isLogged
      }))
    } else {
      this.setState(prevState => ({
        loginError: true
      }))
    }

  }

  handleRegisterSubmit = e => {
    e.preventDefault();
    this.setState({
      loginError: false
    })
  }

  handleLoginError = () => {
    this.setState({
      loginError: false
    })
  }

  componentDidMount() {
    fetch('data/users.json')
      .then(response => response.json())
      .then(result => this.setState({
        users: result
      }))
  }


  render() {
    const { menuAnim, leftTriangleAnim, rightTriangleAnim, circleAnim, isLogged } = this.state;
    return (
      <>
        {/* {!this.state.animEnd ?
          <StartScreen
            lTriangle={leftTriangleAnim}
            rTriangle={rightTriangleAnim}
            circle={circleAnim}
            onClick={this.handleStart}
            onAnimationEnd={this.handleChangeOnAnim}
          /> : false} */}
        <MainNavigation
          onClick={this.handleShowNavigation}
          menuAnim={menuAnim}
        />
        {/* {isLogged ? <Main /> : <Login
          onLoginSubmit={this.handleLoginSubmit}
          loginError={this.state.loginError}
          onRegisterSubmit={this.handleRegisterSubmit}
          handleLoginError={this.handleLoginError} />} */}
        <Main />

      </>
    );
  }
}

export default App;
