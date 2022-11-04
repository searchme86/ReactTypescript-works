import React from 'react';

type Props = { title: string };

function About(props: Props) {
  return (
    <div className="card card-body">
      <h2>About {props.title}</h2>
    </div>
  );
}

export default About;
