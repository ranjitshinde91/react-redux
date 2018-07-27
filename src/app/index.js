import React from 'react'
import {render} from 'react-dom'
import {Header} from './components/Header'
import {Home} from './components/Home'

class App extends React.Component{

  render(){
    var user ={
      name:"Ranjit",
      age:27,
      hobbies:["Reading", "Travelling"]
    }
    return(
        <div className="container">
          <div className="row">
            <div>
              <Header/>
            </div>
          </div>
          <div className="row">
            <div>
              <Home user= {user}/>
            </div>
          </div>
        </div>

    );
  }
}

render(<App/>, window.document.getElementById("app"));
