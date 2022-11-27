import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';

function RepositoriesList() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const InputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionCreators.searchRepositories(term) as any);
  };

  return (
    <div>
      <form action="" onSubmit={onSubmitHandler}>
        <input type="text" onChange={InputHandler} />
        <button>Search</button>
      </form>
    </div>
  );
}

//dispatch(actionCreators.searchRepositories(term) as any

export default RepositoriesList;
