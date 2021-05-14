import React from 'react';

import styles from './ButtonRow.module.css';

const ButtonRow = ({ children }) => {
  const numOptions = children.length
  return <div className={`${styles.buttonRow} ${numOptions > 8 && styles.scroll}`}>{children}</div>;
};

export default ButtonRow;
