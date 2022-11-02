import React from 'react';

function App() {
  let msg = 'React-Typescript';

  const addResult = (x: number, y: number) => {
    return (
      <div className="card card-body bg-light md-3">
        {x} + {y} = {x + y}
      </div>
    );
  };

  return (
    <div className="container">
      <h2>Hello {msg}</h2>
      <hr className="dash-style" />
      {addResult(4, 3)}
    </div>
  );
}

export default App;
