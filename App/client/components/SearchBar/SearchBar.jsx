import React from 'react';
import styles from './SearchBar.less';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search" style={styles}>
          <input placeholder="search" id="mainsearch" type="search" />
      </div>
    );
  }
}


export default SearchBar;