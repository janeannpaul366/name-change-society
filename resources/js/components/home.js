import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Nav from './navbar'


class Home extends Component {

  constructor(props){
        super(props);
        this.ref = this.props.location.state
        console.log(this.props.location.state); 
     }

  render() { 
    //let email = this.ref.email; 
    //const {email , password} = this.ref ;
    return (
         <div> 
            <Nav link="Logout" />       
            <div className="container text-center title">
               <h1>Hey, { this.ref } You are logged in !</h1>
               
              <button className="active"><Link to="/name">Create New Name</Link></button> 
              <button className="active"><Link to="/listname">List Name</Link></button> 
            </div> 
          </div>   
    )
  }
}
 
export default Home