import React from 'react';

const UserCard = (props) => {
    // console.log(props.data)
    return(
        <div className='card'>
            <img src={props.data.avatar_url} alt='no alt'/>
            <div className='card-info'>
                <h3 className='name'>{props.data.name}</h3>
                <p className='username'>{props.data.login}</p>
                <p>{props.data.location}</p>
                <a target='_blank' rel="noopener noreferrer" href={props.data.html_url}>{props.data.html_url}</a>
                <p>Followers: {props.data.followers}</p>
                <p>Following: {props.data.following}</p>
                <p>Bio: {props.data.bio}</p>
            </div>
        </div>
    )
};

export default UserCard;