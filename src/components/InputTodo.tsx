import React, { useState } from 'react';

type InputTodoProps = {
  addTodo: (todo: string) => void;
};

function InputTodo(props: InputTodoProps) {
  const [todo, setTodo] = useState<string>('');

  const addHandler = () => {
    props.addTodo(todo);
    setTodo('');
  };

  const enterInput = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addHandler();
    }
  };

  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group">
          <input
            type="text"
            id="msg"
            name="msg"
            className="form-control"
            placeholder="할 일을 여기에 입력해주세요"
            value={todo}
            onChange={changeTodo}
            onKeyUp={enterInput}
          />
          <span
            className="btn btn-primary input-group-addon"
            onClick={addHandler}
          >
            추가
          </span>
        </div>
      </div>
    </div>
  );
}

export default InputTodo;
