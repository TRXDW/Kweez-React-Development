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
    isLogged: false

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


  render() {
    const { menuAnim, leftTriangleAnim, rightTriangleAnim, circleAnim, isLogged } = this.state;
    return (
      <div className="App">
        {!this.state.animEnd ? <StartScreen lTriangle={leftTriangleAnim} rTriangle={rightTriangleAnim} circle={circleAnim} onClick={this.handleStart} onAnimationEnd={this.handleChangeOnAnim} /> : false}
        <MainNavigation onClick={this.handleShowNavigation} menuAnim={menuAnim} />
        {isLogged ? <Main /> : <Login />}

      </div>
    );
  }
}

export default App;
