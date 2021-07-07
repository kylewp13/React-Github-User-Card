import React from "react";
import FollowersCard from "./friendCard";

const Followers = props => {
  // console.log(props)
  return (
    <div>
     {props.data.map( item => (
      //  <h1>hi</h1>
      <FollowersCard key={item.id} user={item}/>
     ))}
    </div>
  );
};

export default Followers;