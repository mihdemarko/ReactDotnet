import React from 'react';
import styles from './ApplyButton.less';

class ApplyButton extends React.Component {

  render() {
    return (
      <div className="applyButton" style={styles}>
          <button>Apply</button>
      </div>
    );
  }
}


export default ApplyButton;