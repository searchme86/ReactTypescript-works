import React, { ChangeEvent, useState, useRef } from 'react';
// import CountryList from './CountryList';
// import styles from './styles';
// import Footer from './Footer';
// import {
//   BasicButton,
//   ItalicButton,
//   UnderLineButton,
//   WhiteUnderlineButton,
// } from './Buttons';
// import Calc from './Calc';
import produce from 'immer';

export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
};

function App() {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  // const [msg, setMsg] = useState<string>('World');
  // const [list, setList] = useState<Array<CountryType>>([
  //   { no: 1, country: '이집트', visited: false },
  //   { no: 2, country: '일본', visited: true },
  //   { no: 3, country: '피지', visited: false },
  //   { no: 4, country: '콜롬비아', visited: false },
  // ]);
  // const [x, setX] = useState<number>(100);
  // const [y, setY] = useState<number>(200);
  // const [oper, setOper] = useState<string>('&');

  // const [theme, setTheme] = useState<string>('basic');
  // const addResult = (x: number, y: number) => {
  //   return (
  //     <div className="card card-body bg-light md-3">
  //       {x} + {y} = {x + y}
  //     </div>
  //   );
  // };

  const elemX = useRef<HTMLInputElement>(null);
  const elemY = useRef<HTMLInputElement>(null);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);
    if (isNaN(newValue)) newValue = 0;
    if (e.target.id === 'x') setX(newValue);
    else setY(newValue);
  };

  const add = () => {
    let x1: number = parseInt(elemX.current ? elemX.current.value : '', 10);
    let y1: number = parseInt(elemX.current ? elemX.current.value : '', 10);
    if (isNaN(x1)) x1 = 0;
    if (isNaN(y1)) y1 = 0;
    setX(x1);
    setY(y1);
    setResult(x1 + y1);
  };

  let quiz = {
    students: ['홍길동', '성춘향', '박문수', '변학도'],
    quizlist: [
      {
        question: '한국 프로 야구팀이 아닌것은?',
        options: [
          { no: 1, option: '삼성 라이온즈' },
          { no: 2, option: '기아 타이거즈' },
          { no: 3, option: '두산 베어즈' },
          { no: 4, option: 'LA 다저스' },
        ],
        answer: 4,
      },
      {
        question: '2018년 크리스마스는 무슨 요일인가?',
        options: [
          { no: 1, option: '월' },
          { no: 2, option: '화' },
          { no: 3, option: '수' },
          { no: 4, option: '목' },
        ],
        answer: 2,
      },
    ],
  };

  const quiz2 = produce(quiz, (draft) => {
    draft.quizlist[0].options[0].option = 'LG트윈스';
  });

  console.log(quiz === quiz2);
  console.log(quiz.quizlist === quiz2.quizlist);
  console.log(quiz.quizlist[0] === quiz2.quizlist[0]);
  console.log(quiz.students === quiz2.students);

  return (
    // <div className="container">
    //   <h2> Hello {msg}!</h2>
    //   <hr style={styles.dashStyle} />
    //   <hr className="dash-style" />
    //   {addResult(4, 3)}
    //   <CountryList countries={list} />
    //   <BasicButton>기본</BasicButton>
    //   <ItalicButton>이탤릭</ItalicButton>
    //   <UnderLineButton>언더라인</UnderLineButton>
    //   <WhiteUnderlineButton>화이트 언더라인</WhiteUnderlineButton>
    //   <Calc x={x} y={y} oper={oper} />
    //   <Footer theme={theme} />
    // </div>
    // <div className="" style={{ margin: '5px' }}>
    //   <h3>이벤트 기초</h3>
    //   <div className="">
    //     <button onClick={increment}>증가</button>
    //     <button onClick={decrement}>감소</button>
    //     <div className="">
    //       카운트 : <input type="text" value={count} />
    //     </div>
    //   </div>
    // </div>
    <div className="">
      <h3>제어컴포넌트</h3>
      X: <input type="text" id="x" defaultValue={x} ref={elemX} />
      Y: <input type="text" id="y" defaultValue={y} ref={elemY} />
      <button onClick={add}>덧셈 계산</button>
      결과:<span>{result}</span>
    </div>
  );
}

export default App;
