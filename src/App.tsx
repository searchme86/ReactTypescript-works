import React, { useState } from 'react';
import CountryList from './CountryList';
import styles from './styles';
import Footer from './Footer';
import {
  BasicButton,
  ItalicButton,
  UnderLineButton,
  WhiteUnderlineButton,
} from './Buttons';
import Calc from './Calc';

export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
};

function App() {
  const [msg, setMsg] = useState<string>('World');
  const [list, setList] = useState<Array<CountryType>>([
    { no: 1, country: '이집트', visited: false },
    { no: 2, country: '일본', visited: true },
    { no: 3, country: '피지', visited: false },
    { no: 4, country: '콜롬비아', visited: false },
  ]);
  const [x, setX] = useState<number>(100);
  const [y, setY] = useState<number>(200);
  const [oper, setOper] = useState<string>('&');

  const [theme, setTheme] = useState<string>('basic');
  const addResult = (x: number, y: number) => {
    return (
      <div className="card card-body bg-light md-3">
        {x} + {y} = {x + y}
      </div>
    );
  };

  return (
    <div className="container">
      <h2> Hello {msg}!</h2>
      <hr style={styles.dashStyle} />
      <hr className="dash-style" />
      {addResult(4, 3)}
      <CountryList countries={list} />
      <BasicButton>기본</BasicButton>
      <ItalicButton>이탤릭</ItalicButton>
      <UnderLineButton>언더라인</UnderLineButton>
      <WhiteUnderlineButton>화이트 언더라인</WhiteUnderlineButton>
      <Calc x={x} y={y} oper={oper} />
      {/* <Footer theme={theme} /> */}
    </div>
  );
}

export default App;
