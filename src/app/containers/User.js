import React from 'react'
import {connect} from "react-redux"
import {User} from '../components/User'
import {sampleAction} from '../actions/sample'
// This is a container

export const mapStateToProps = (state) => {
	return {
		name: state.sample.name
	}
}

export const mapDispatchToProps = (dispatch) =>{
  return{
    onButtonClick: () => dispatch(sampleAction())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)
