import React from 'react';
import { CountryType } from './App';

import styles from './styles';

type CountryItemPropsType = {
  countryItem: CountryType;
};

function CountryItem(props: CountryItemPropsType) {
  let item = props.countryItem;
  return (
    <li
      key={item.no}
      style={styles.listItemStyle}
      className={item.visited ? 'list-group-item active' : 'list-group-item'}
    >
      {item.country}
    </li>
  );
}

export default CountryItem;
