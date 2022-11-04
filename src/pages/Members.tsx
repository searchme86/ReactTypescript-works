import React from 'react';

import { MemberType } from '../App';
import { useNavigate } from 'react-router-dom';

type Props = { members: Array<MemberType> };

function Members(props: Props) {
  const navigate = useNavigate();
  const goHome = () => {
    if (window.confirm('정말로 홈으로 이동할까요?')) {
      navigate('/', { state: { from: '/members' } });
    }
  };
  let imgstyle = { width: 90, height: 80 };
  let list = props.members.map((member) => {
    return (
      <div key={member.name} className="col-6 col-md-4 col-lg-3">
        <img
          src={member.photo}
          alt={member.name}
          className="img-thumbnail"
          style={imgstyle}
        />
        <br />
        <h6>{member.name}</h6>
        <br />
        <br />
      </div>
    );
  });
  return (
    <div>
      <h2 className="m-4">Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
      <button className="btn btn-secondary" onClick={goHome}>
        goHome
      </button>
    </div>
  );
}

export default Members;
