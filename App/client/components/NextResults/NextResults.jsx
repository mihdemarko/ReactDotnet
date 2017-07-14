import React from 'react';
import styles from './NextResults.less';

class NextResults extends React.Component {

  render() {
    return (
        <div className="nextResults" style={styles}>
            <div className="arrow-left"></div>
            <span className="results-current">number</span>
            <span> of </span>
            <span className="results-total">number</span>
            <div className="arrow-right"></div>
        </div>
    );
  }
}

export default NextResults;