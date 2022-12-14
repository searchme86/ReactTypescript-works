import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

function RepositoriesList() {
  const [term, setTerm] = useState('');
  // useAction 훅으로 actionCreator를 모듈화 함
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  console.log('data', data);
  console.log('error', error);
  console.log('loading', loading);

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
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
}

//dispatch(actionCreators.searchRepositories(term) as any

export default RepositoriesList;
