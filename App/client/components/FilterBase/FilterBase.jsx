import React from 'react';
import styles from './FilterBase.less';

class FilterBase extends React.Component {

  render() {
    return (
      <div className="filterBase" style={styles}>
          <span>Filter Name</span>
      </div>
    );
  }
}


export default FilterBase;