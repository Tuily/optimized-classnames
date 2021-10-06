import React from 'react';

import cn from 'classnames';

import styles from './Button.module.css';

const Button = ({ className }) => {
  return <button className={cn(styles.button, className)}>click me</button>;
};

export default Button;
