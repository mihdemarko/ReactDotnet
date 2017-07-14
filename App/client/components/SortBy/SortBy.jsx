import React from 'react';
import styles from './SortBy.less';

class SortBy extends React.Component {

  render() {
    return (
      <div className="sortby" style={styles}>
          <span>Sort by </span>
          <span className="sortby-value">value</span>
          <div className="arrow-down"></div>
      </div>
    );
  }
}


export default SortBy;