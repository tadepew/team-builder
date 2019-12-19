import React, { useState } from "react";

import "./App.css";
import MemberForm from "./Components/MemberForm";
import Members from "./Components/Members";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Tristan Depew",
      email: "tad@gmail.com",
      role: "Front-end Engineer"
    }
  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members], newMember);
  };
  return (
    <div className="App">
      <h1>Team Member Sign Up</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
