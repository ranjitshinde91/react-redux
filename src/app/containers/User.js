import React from 'react'
import {connect} from "react-redux"
import {User} from '../components/User'

// This is a container

export const mapStateToProps = (state) => {
	return {
		name: state.sample.name
	}
}

export default connect(mapStateToProps)(User)
