import {combineReducers} from 'redux'
import sampleReducer from './sample'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  sample:sampleReducer,
  router:routerReducer
})
 export default rootReducer
