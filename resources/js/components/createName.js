import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './navbar'
import axios from 'axios'

class createName extends Component {

    constructor(props){
        super(props);
        this.state = {
            current_name: '',
        }
     }

     onSubmit(e){
        e.preventDefault();
        const {name} = this.state ;
        axios.post('/name', { 
            current_name,
          })
          .then(response=> {
           this.setState({err: false});
           this.props.history.push("home") ;
          })
          .catch(error=> {
            this.refs.current_name.value="";
            this.setState({err: true}); 
          });
     }

     onChange(e){
        const {current_name, value} = e.target ;
        this.setState({[current_name]: value});
     }

    render() {
        let error = this.state.err ;
        let msg = (!error) ? 'Name created Successfully' : 'Oops! , Something went wrong.' ;
        let current_name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (   
             <div>   
                <Nav link="Logout" /> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Create Name</div>
                                <div className="panel-body">
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>   
                                    <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label htmlFor="current_name" className="col-md-4 control-label">Name</label>

                                            <div className="col-md-6">
                                                <input id="current_name" type="text" className="form-control" ref="current_name" name="current_name" onChange={this.onChange.bind(this)} required />  
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Create
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
      }
}

export default createName;