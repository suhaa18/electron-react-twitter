import React from 'react';
import Tweet from './Tweet'

export default class TweetList extends React.Component {
  isActive() {
    return this.props.selectedTab === this.props.tab;
  }

  render() {
    return(
      <ul id={this.props.id} className={`tweets ${this.props.withHeader ? 'with_header' : ''} ${this.isActive() ? 'active' : ''}`}>
        {this.props.tweets.map((tweet) =>
          <Tweet key={tweet.id} tweet={tweet}/>
        )}
      </ul>
    );
  }
}
