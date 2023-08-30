import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layuot';
import { Component } from 'react';
import { FeedbackOptions } from './Buttons/Buttons';
import { NoFeetback } from './NoFeetback/NoFeetback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    const total = this.calculateTotal();
    const positivePercentage = this.calculatePositivePercentage();
    const noFeedback = this.calculateNoFeedback();

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {noFeedback ? (
            <NoFeetback title="No ffetback given!" />
          ) : (
            <Statistics
              options={this.state}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>

        <GlobalStyle />
      </Layout>
    );
  }
}
