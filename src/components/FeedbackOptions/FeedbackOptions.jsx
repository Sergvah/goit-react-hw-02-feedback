import React from 'react';
import css from './feedbackoptions.module.css';
import PropTypes from 'prop-types';

const Buttonfeedback = ({ onGood, onNeutral, onBad }) => (
  <div className={css.btn_block}>
    <button className={css.btn_item} type="button" onClick={onGood}>
      Good
    </button>
    <button className={css.btn_item} type="button" onClick={onNeutral}>
      Neutral
    </button>
    <button className={css.btn_item} type="button" onClick={onBad}>
      Bad
    </button>
  </div>
);
export default Buttonfeedback;
Buttonfeedback.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
