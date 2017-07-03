import React from 'react';
import styles from './square.css';


class Square extends React.Component {
  render() {
    return (
      <button className="square" style={styles} onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;