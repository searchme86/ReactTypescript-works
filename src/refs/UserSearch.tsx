import React, { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  {
    name: 'Alex',
    age: 20,
  },
  { name: 'Michael', age: 20 },
];

function UserSearch() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

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
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
        ref={inputRef}
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
