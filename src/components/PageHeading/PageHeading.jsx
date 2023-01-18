import React from 'react';
import css from './PageHeading.module.css';

const PaheHeading = ({ text }) => {
  return <h1 className={css.title}>{text}</h1>;
};

export default PaheHeading;
