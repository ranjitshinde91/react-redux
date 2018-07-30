import React from 'react'
import {render} from 'react-dom'
import {Header} from './components/Header'
import {Home} from './components/Home'
import {User} from './components/User'

import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'

class App extends React.Component{

  constructor(props){
    super();
  }

  render(){
    return(
        <div className="container">
          <div className="row">
            <div>
              <Header/>
            </div>
          </div>    
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/user' component={User} />
          </Switch>
        </div>
    );
  }
}

render(<BrowserRouter>
          <App/>
      </BrowserRouter>, window.document.getElementById("app"));
