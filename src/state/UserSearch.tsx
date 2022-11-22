import React, { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  {
    name: 'Alex',
    age: 20,
  },
  { name: 'Michael', age: 20 },
];

function UserSearch() {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      <h1>userSearch</h1>

      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <button onClick={onClick}>Find Name</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
}

export default UserSearch;