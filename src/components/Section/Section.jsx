import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
};

export default Section;
