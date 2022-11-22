import React from 'react';
import Child from './Child';

function Parent() {
  const onClick = () => {
    console.log('clicked');
  };

  return (
    <Child color="red" onClick={onClick}>
      test
    </Child>
  );
}

export default Parent;
