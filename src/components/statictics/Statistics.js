import React from 'react';
import PropTypes from 'prop-types';
import styled from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
		<div >
			<p className={styled.statistic}>Good: {good}</p>
			<p className={styled.statistic}>Neutral: {neutral}</p>
			<p className={styled.statistic}>Bad: {bad}</p>
			<p className={styled.total}>Total: {total}</p>
			<p className={styled.positive}>Positive feedback: {positivePercentage} %</p>
		</div>
	);
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired
};

export default Statistics;