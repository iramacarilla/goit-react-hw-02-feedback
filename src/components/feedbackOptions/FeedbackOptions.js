import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<div className={styles.options} >
    <button type="button" name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" name="neutral"  onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button type="button" name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;