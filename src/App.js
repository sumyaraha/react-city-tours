import React, { Component } from "react";
import Navbar from
 "./component/Navbar/Navbar";
import './App.scss';
import TourList from "./component/TourList";



class App extends Component  {
  render(){
    return(
      <main>
      <Navbar/>

      <TourList/>
    </main>
    );
    
}
}

export default App;
