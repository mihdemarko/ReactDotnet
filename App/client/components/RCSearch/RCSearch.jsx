import React from 'react';
import styles from './RCSearch.less';
import SearchBar from '../SearchBar/SearchBar';
import HideButtonBase from '../HideButtonBase/HideButtonBase';
import FilterBase from '../FilterBase/FilterBase';
import ApplyButton from '../ApplyButton/ApplyButton';
import MapGoogle from '../MapGoogle/MapGoogle';
import ResultHolder from '../ResultHolder/ResultHolder';

class RCSearch extends React.Component {

  render() {
    return (
      <div className="wrapper" style={styles}>
            <div className="controlPanel">
                <SearchBar />
                <HideButtonBase />
                <HideButtonBase />
            </div>
            <div className="filterPanel">
                <FilterBase/>
                <FilterBase/>
                <FilterBase/>
                <FilterBase/>
                <FilterBase/>
                <ApplyButton/>
            </div>
            <div className="mapAndResults">
                <MapGoogle/>
                <ResultHolder/>
            </div>
      </div>
    );
  }
}


export default RCSearch;