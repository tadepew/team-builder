import React, { useState } from "react";

const MemberForm = props => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Name"
        onChange={handleChanges}
        name="name"
        value={member.name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder="Email"
        onChange={handleChanges}
        name="email"
        value={member.email}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        placeholder="Role"
        onChange={handleChanges}
        name="role"
        value={member.role}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MemberForm;
