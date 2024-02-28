import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>this is ProfileClass</h1>
        <h3>{this.state.userInfo?.name}</h3>
        <h3>{this.state.userInfo?.bio}</h3>
        <h3>{this.state.userInfo?.twitter_username}</h3>
        <img src={this.state.userInfo?.avatar_url} alt="Avatar" />
      </div>
    );
  }
}

export default ProfileClass;
