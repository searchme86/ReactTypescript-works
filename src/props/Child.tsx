import React from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}

function Child({ color, onClick, children }: ChildProps) {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default Child;
