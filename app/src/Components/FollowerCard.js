import React from 'react';

class FollowerCard extends React.Component{


  render(){
    const { gitFollowers } = this.props;
    console.log(gitFollowers);
    return (
      <div className='followerCard'>
        <h3>{gitFollowers.login}</h3>
        <img src={gitFollowers.avatar_url} alt='Follower' />
      </div>
    )
  }
}

export default FollowerCard;