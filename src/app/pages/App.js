import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Header} from '../components/Header'
import {Home} from '../components/Home'
import UserPage from '../pages/User'
import Jumbotron from '../components/Jumbotron'

const App = () => {
    return(
        <div className="container">
          <Header/>
          <Jumbotron/>  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/user' component={UserPage} />
          </Switch>
        </div>
    );
}

export default App
