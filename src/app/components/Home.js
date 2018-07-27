import React from 'react'
import PropTypes from 'prop-types';

export class Home extends React.Component{

  constructor(props){
    super();

    this.state={
      age:props.user.age,
      status:0
    }
  }

makeMeOlder(){
  this.setState(({
      age: this.state.age+3
  }))
}
  render(){
      var welcomeMsg = "Welcome "
      return(
          <div>
            <p>{welcomeMsg} {this.props.user.name}</p>
            <p>Your age is {this.state.age}</p>
            <p> Status :{this.state.status}</p>
            <p>Hobbies:</p>
            <ul>
              {this.props.user.hobbies.map((hobby, i)=> <li key={i}> {hobby} </li>)}
            </ul>
            <button type="button" class="btn btn-primary" onClick={()=> this.makeMeOlder()}>Make Me older</button>
          </div>

      )
  }
}
Home.propTypes = {
  user: PropTypes.object
}
