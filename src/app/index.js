import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './pages/App'

import {configureStore, history} from './store/configure-store'
import {Provider} from 'react-redux'

const store = configureStore()

render(<Provider store={store} ><BrowserRouter>
          <App/>
      </BrowserRouter></Provider>, window.document.getElementById("app"));
