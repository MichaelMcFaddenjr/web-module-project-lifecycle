import React from 'react';

class UserCard extends React.Component{

  render(){
    const { gitHubUser } = this.props;
    return(
      <div className='myUserCard'>
        <img src={gitHubUser.avatar_url} alt="User" />
        <div className='textContainer'>
          <h3>{gitHubUser.name}</h3>
          <p>{gitHubUser.location} <br/>
          Number of Followers: {gitHubUser.followers}<br/>
          Repositories: {gitHubUser.public_repos}</p>
        </div>
      </div>
    )
  }
}
export default UserCard;