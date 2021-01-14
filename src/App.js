import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";
import FriendCard from "./components/FriendCard";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
     
      <FriendCard />
    </Wrapper>
  );
}

export default App;
