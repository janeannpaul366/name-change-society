import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './navbar'
import axios from 'axios'

class Name extends Component {
    
    fetchNames(){
        axios.get('/name')
          .then(response=> {
           this.setState({names: res.data.names});
          this.setState({loading: false});
        });

        // const res = await Axios.get("/name");
        // if(res.data.status === 200){
        //     this.setState({names: res.data.names});
        //     this.setState({loading: false});
        // }
    }

    componentDidMount(){
        this.fetchNames();
    }

    render(){
        const {names} = this.props;
        return(

            <div> 
            <Nav link="Logout" />       
            <div>
                {this.state.names.map(names => (
                   {names}  
                ))}
            </div>
          </div>  

            
        )
    }
}

export default Names;