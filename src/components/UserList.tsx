import React from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipCode: string;
  };
};

type UserListProps = {
  userList: User[];
};

function UserList({ userList }: UserListProps) {
  return (
    <div className="card">
      {userList.map((user: User) => (
        <div key={user.id} className="card-list">
          <h3>Name : {user.name}</h3>
          <h3>Username: {user.username}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Phone: {user.phone}</h3>
          <ul>
            <li>Street: {user.address.street}</li>
            <li>Suite: {user.address.suite}</li>
            <li>City: {user.address.city}</li>
            <li>Zip Code: {user.address.zipCode}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UserList;
