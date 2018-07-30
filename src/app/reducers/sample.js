import {SAMPLE_ACTION, sampleAction} from '../actions/sample'
import {getRandomName} from '../utils/index'

export default(state={name:null}, action)=>{
  switch (action.type) {
    case SAMPLE_ACTION:
        return {
          ...state,
          name:getRandomName()
        }
      break;
    default:
      return state
  }
}
