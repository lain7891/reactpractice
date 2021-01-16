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
    // friend.id !== id is an implicint returm
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
        handleClick={this.removeFriend}
      />))}

     
    </Wrapper>
    );
  }
}

export default App;


