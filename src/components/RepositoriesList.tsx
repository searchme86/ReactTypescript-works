import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';
import { useActions } from '../hooks/useActions';

function RepositoriesList() {
  const [term, setTerm] = useState('');
  // useAction 훅으로 actionCreator를 모듈화 함
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();

  const InputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(actionCreators.searchRepositories(term) as any);
    searchRepositories(term);
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
