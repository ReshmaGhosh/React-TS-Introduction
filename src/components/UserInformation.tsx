import React from "react";

import { User } from "../types/types";
import "./UserList.css";

type Prop = {
  user: User;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
};

export default function UserInformation({ user }: Prop) {
  //Object.keys(user.address): [street, suit, city, zipCode]
  return (
    <div>
      <div className="user-list-container">
        UserInformation
        <p> Name: {user.name}</p>
        <p> User name: {user.username}</p>
        <p> Phone: {user.phone}</p>
        <div className="user-list">
          <p> Address: </p>
          {Object.keys(user.address).map((key) => {
            return (
              // <li>{key + ": " + user.address[key as keyof typeof user.address]}</li>
              <li>{key + ": " + user.address[key as keyof Address]}</li>
            );
          })}
        </div>
      </div>
    </div>
  );
}
