import React, { Component } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';

class App extends Component {

  state = {
    friends: friends,
  }

  removeFriend= (id) => {
    // friend.id !== id is an implicint returm which allows you to x a friend
const newFriends = this.state.friends.filter((friend) => friend.id !== id);
this.setState({ friends: newFriends })
  }
  render() {
    return (
      <Wrapper>
      <Title>Friends List</Title>
      {/* THIS IS WHAT LOOPED THROUGH ALL THE CHARACTERS ON FRIEND.JSON USING MAP */}
      {this.state.friends.map((friend)=>  (<FriendCard
        name={friend.name}
        image={friend.image}
        occupation={friend.occupation}
        location={friend.location}
        id={friend.id}
        // the click needs to be called on the index.js inside the friend card so it works
        handleClick={this.removeFriend}
        // need the key value because we are looping and using map. Helps react know what to remove
        key={friend.id}
      />))}

     
    </Wrapper>
    );
  }
}

export default App;


