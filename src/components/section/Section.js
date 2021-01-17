import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css'

const Section = ({ title, children }) => {
	return (
		<div className={styles.section}>
			<h2>{title}</h2>
			<div>{children}</div>
		</div>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired
};
export default Section;