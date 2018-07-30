import {SAMPLE_ACTION, sampleAction} from '../actions/sample'

export default(state={name:null}, action)=>{
  switch (action.type) {
    case SAMPLE_ACTION:
        return {
          ...state,
          name:'Ranjit'
        }
      break;
    default:
      return state
  }
}
