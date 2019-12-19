  import React from "react";

const FollowersCard = props => {
  return (
    <div className="card">
      <img src={props.user.avatar_url} alt="avatar" />
      <div className="card-info">
        <p className="username">{props.user.login}</p>
        <p>
          profile: <a target='_blank' href="{props.user.html_url}">{props.user.html_url}</a>
        </p>
        <p>Followers: {props.user.followers}</p>
        <p>Following: {props.user.following}</p>
      </div>
    </div>
  );
};

export default FollowersCard;