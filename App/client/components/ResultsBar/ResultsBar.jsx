import React from 'react';
import styles from './ResultsBar.less';
import NextResults from '../NextResults/NextResults';
import SortBy from '../SortBy/SortBy';
import ViewSelect from '../ViewSelect/ViewSelect'

class ResultsBar extends React.Component {

  render() {
    return (
      <div className="recordsBar" style={styles}>
        <span>number records found</span>
        <NextResults/>
        <SortBy/>
        <ViewSelect/>
      </div>
    );
  }
}


export default ResultsBar;