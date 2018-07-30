import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Header} from '../components/Header'
import {Home} from '../components/Home'
import UserPage from '../pages/User'


const App = () => {
    return(
        <div className="container">
          <div className="row">
            <div>
              <Header/>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/user' component={UserPage} />
          </Switch>
        </div>
    );
}

export default App
