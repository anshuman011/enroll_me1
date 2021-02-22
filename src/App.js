import React, { Component } from 'react';
import './App.scss';

// import AddUserForm from './AddUserForm/AddUserForm';
import SideDrawer from "./SideDrawer/SideDrawer";
import Layout from './Layout/Layout';


class App extends Component {

  state={showSideDrawer:false}
  showSideDrawerHandler=()=>{
    this.setState(prevState=>{return {showSideDrawer:!prevState.showSideDrawer}})
  }
  changeBackground=()=>{document.getElementById("bgColor").style.backgroundColor="black"}

  render() {
    let things=(
      <div className="App">
        <div style={{flex:"3.6%"}}>
      <SideDrawer showSideDrawer={this.state.showSideDrawer}/></div>
      <div style={{flex:"96.4%"}}>
      <Layout showSideDrawerHH={this.showSideDrawerHandler}/></div>
      </div>
      )
    if(this.state.showSideDrawer){
      things=(
        <div className="App">
          <div /* className="a" */style={{flex:"20%"}}>
        <SideDrawer showSideDrawer={this.state.showSideDrawer}/></div>
        <div /* className="b" */style={{flex:"92%"}}>
        <Layout showSideDrawerHH={this.showSideDrawerHandler}/></div>
        </div>
        )
    }
    

    return (
      <div id="bgColor"> 
        <button onClick={this.changeBackground}>DarkModeToggle</button>
      {things}
      {/* <AddUserForm/>    */}
      </div>
    );
  }
}

export default App;

