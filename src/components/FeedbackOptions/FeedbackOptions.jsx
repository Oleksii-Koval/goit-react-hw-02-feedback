import React from 'react';
import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.buttons_container}>
      <button className={css.good_btn} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button
        className={css.neutral_btn}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={css.bad_btn} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
