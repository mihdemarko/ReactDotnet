import React from 'react';
import styles from './Result.less';
import PictureAlbom from '../PictureAlbom/PictureAlbom'

class Result extends React.Component {

  render() {
    return (
        <div className="result" style={styles}>
            <PictureAlbom />
            <div className="infoHolder">
                <h1>Building Name</h1>
                <h3>Address1</h3>
                <h3>Address2</h3>
                <h3>AreaInfo</h3>
            </div>
        </div>
    );
  }
}

export default Result;