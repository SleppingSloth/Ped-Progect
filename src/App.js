import React, { useState, useEffect } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [serchValue, setSerchValue] = useState("");

  const [invitedPeople, setInvitedPeople] = useState([]);
  const [success, setSuccess] = useState(false);
  

  const onClickInvitedPeople = (information, isInvited) => {
    if (isInvited) {
      setInvitedPeople((prev) =>
        prev.filter((person) => person.id != information.id)
      );
    } else {
      setInvitedPeople((prev) => [...prev, information]);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json.data);
        setLoading(false);
      })
      .catch((err) => {
        console.err(err);
        alert("Error 501");
        setLoading(true);
      });
  }, []);

  return (
    <div className="App">
      {success ? (
        <Success setSuccess={setSuccess} count={invitedPeople.length} />
      ) : (
        <Users
          users={users}
          isLoading={isLoading}
          setSerchValue={setSerchValue}
          serchValue={serchValue}
          setSuccess={setSuccess}
          onClickInvitedPeople={onClickInvitedPeople}
        />
      )}
    </div>
  );
}

export default App;
