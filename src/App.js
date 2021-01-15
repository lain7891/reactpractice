import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard"

function App() {
  return (
    <>
    <Wrapper>
      <Title>Friends List</Title>
      <FriendCard
      name="Squidward"
      occupation="Cashier"
      location="An Easter Island Head"
      image={friends[2].image}
      />

    <FriendCard
    
    name={friends[1].name}
    occupation={friends[1].occupation}
    location={friends[1].location}
    image={friends[1].image}/>
    </Wrapper>
    </>
  );
}

export default App;
