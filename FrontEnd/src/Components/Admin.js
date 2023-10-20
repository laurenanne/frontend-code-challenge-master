import React, { useEffect, useState } from "react";
import YodlrApi from "../YodlrApi";
import UserCard from "./UserCard";
import { Spinner } from "reactstrap";

function Admin() {
  // sets state for the user list
  const [users, setUsers] = useState(null);

  //   on render it will call the backend to get a list of all the users
  useEffect(() => {
    async function getUsers() {
      let users = await YodlrApi.getUsers();
      console.log(users);
      setUsers(users);
    }
    getUsers();
  }, []);

  //   while waiting for the return call from the api the spinner will load
  if (!users) {
    return (
      <div>
        <Spinner />;
      </div>
    );
  } else {
    return (
      <div className="user-section vh-100">
        <h3 className="m-2 text-center">Users</h3>
        <div className="user-list-section text-center vh-100">
          <UserCard users={users} />
        </div>
      </div>
    );
  }
}
export default Admin;
