import React from 'react';
import FollowerCard from './FollowerCard'

class Followers extends React.Component{

  render(){
    return (
      <div className='followersContainer'>
        {this.props.gitFollowers.map(gitFollowers => (
          <FollowerCard key={gitFollowers.id} gitFollowers={gitFollowers} />
        ))}
      </div>
    )
  }
}

export default Followers;