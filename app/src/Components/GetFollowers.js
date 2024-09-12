import React from 'react';
import axios from 'axios';
import Followers from './Followers'

class GetFollowers extends React.Component{
  state = {
    gitFollowers: []
  }

  componentDidMount(){
    axios
    .get('https://api.github.com/users/MichaelMcFaddenjr/followers')
    .then(resp=>{
      this.setState({
        gitFollowers: resp.data
      })
    })
    .catch(err=>{
      console.log(err);
    });
  }
  render(){
    return(
      <div>
        <Followers gitFollowers={this.state.gitFollowers}/>
      </div>
    )
  }
}

export default GetFollowers