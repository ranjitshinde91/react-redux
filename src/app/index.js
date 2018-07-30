import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import {Header} from './components/Header'
import {Home} from './components/Home'
import UserPage from './pages/User'

import {configureStore, history} from './store/configure-store'
import {Provider} from 'react-redux'

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

const initialState = {
	sample: {
		name: "ThoughtWorks"
	}
}

const store = configureStore(initialState)

render(<Provider store={store} ><BrowserRouter>
          <App/>
      </BrowserRouter></Provider>, window.document.getElementById("app"));
