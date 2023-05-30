import React from "react";
import { User } from "../types/types";
import UserInformation from "./UserInformation";
import "./UserList.css";

type Prop = {
  userList: User[];
};

export default function UserList({ userList }: Prop) {
  return (
    <div className="user-list">
      <h1> UserList</h1>
      <div className="grid-container">
        {userList.map((user) => (
          <UserInformation key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
