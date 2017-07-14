import React from 'react';
import styles from './ResultHolder.less';
import ResultsBar from '../ResultsBar/ResultsBar';
import Result from '../Result/Result'

class ResultHolder extends React.Component {

  render() {
    return (
      <div className="results" style={styles}>
        <ResultsBar/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
      </div>
    );
  }
}


export default ResultHolder;