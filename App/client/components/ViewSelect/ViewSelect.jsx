import React from 'react';
import styles from './ViewSelect.less';

class ViewSelect extends React.Component {

  render() {
    return (
      <div className="view-select" style={styles}>
          <span>View</span>
          <span className="view-select-icon">icon</span>
          <div className="arrow-down"></div>
      </div>
    );
  }
}


export default ViewSelect;