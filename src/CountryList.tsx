import React from 'react';
import { CountryType } from './App';
import CountryItem from './CountryItem';

type CountryListPropsType = {
  countries: Array<CountryType>;
};

function CountryList(props: CountryListPropsType) {
  const list = props.countries;
  let countries = list.map((item, index) => {
    return <CountryItem key={item.no} countryItem={item} />;
  });

  return <ul className="list-group">{countries}</ul>;
}

export default CountryList;
