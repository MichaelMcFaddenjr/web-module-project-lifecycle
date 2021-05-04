import './App.css';
import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard';
import Followers from './Components/GetFollowers';
import './styles.scss';

class App extends React.Component{
  state = {
    gitHubUser: []
  }

  componentDidMount(){
    axios
    .get('https://api.github.com/users/MichaelMcFaddenjr')
    .then(resp=>{
      console.log('resp: ', resp);
      this.setState({
        gitHubUser: resp.data
      });
    })
    .catch(err=> {
      console.log(err);
    });
  }
  render(){
     return (
    <div className="App">
      <h1>GitHub User Cards</h1>
      <UserCard gitHubUser={this.state.gitHubUser}/>
      <h2>Followers:</h2>
      <Followers className='followers'/>
    </div>
  ); 
  }
}

export default App;
