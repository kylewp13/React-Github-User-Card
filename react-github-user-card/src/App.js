import React from 'react';
import UserCard from './components/userCard';
import Followers from './components/followers';
import UserForm from './components/UserForm';
import axios from 'axios';

class App extends React.Component {
  state = {
    myCard: "Kylewp13",
    myFriends: [],
    myCardData: [],
  };

  componentDidMount() {
    console.log('CDM')
    axios
      .get(`https://api.github.com/users/${this.state.myCard}/followers`)
      .then(res => {
        console.log(res.data)
        this.setState({
          myFriends: res.data
        })
      })
      .catch(err => {
        console.log("The data was not returned for myCard", err);
        });
    axios
      .get(`https://api.github.com/users/${this.state.myCard}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          myCardData: res.data
        })
        console.log(this.state.myFriends)
      })
  }

  componentDidUpdate() {
    console.log('CDU')
    axios
      .get(`https://api.github.com/users/${this.state.myCard}/followers`)
      .then(res => {
        console.log(res.data)
        if (this.state.myCard !== res.data){
          this.setState({
          myFriends: res.data
        })}
      })
      .catch(err => {
        console.log("The data was not returned for myCard", err);
        });
    axios
      .get(`https://api.github.com/users/${this.state.myCard}`)
      .then(res => {
        console.log(res.data)
        if (this.state.myFriends !== res.data){
          this.setState({
          myCardData: res.data
        })}
        console.log(this.state.myFriends)
      })
  }

  addNewUser = (addUserName) => {
    this.setState({
      myCard: addUserName
    })
  };

  render() {
      console.log(this.state.myFriends)
    return (
      <div>
        <UserForm addNewUser={this.addNewUser} />
        <UserCard data={this.state.myCardData}/>
        <Followers data={this.state.myFriends}/>
      </div>
    )
  }
}

export default App;
