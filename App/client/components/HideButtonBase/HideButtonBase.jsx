import React from 'react';
import styles from './HideButtonBase.less';

class HideButtonBase extends React.Component {

  render() {
    return (
      <div className="hideButton" style={styles}>
          <button>ButtonTitle</button>
      </div>
    );
  }
}


export default HideButtonBase;