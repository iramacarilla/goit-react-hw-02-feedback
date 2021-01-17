import React, { Component } from 'react';
import Statistics from './statictics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';

export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	};

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
	};

	countPositiveFeedbackPercentage = () => {
		const result = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
	};

	onLeaveFeedback = (e) => {
		const name = e.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};
	render() {
		const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();
		return (
			<>
				<Section title="Please leave feedback">
                <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
				</Section>

				{total === 0 ? (
					<Notification message="No feedback given" />
				) : (
					<Section title="Statistics">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					</Section>
				)}
			</>
		);
	}
}
