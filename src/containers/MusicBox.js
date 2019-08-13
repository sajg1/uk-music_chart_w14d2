import React, {Component} from 'react';
import ChartList from '../components/ChartList'

class MusicBox extends Component {
  render(){
    return(
      <div className="music-box">
        <h2>I'm a Music Box</h2>
        <ChartList/>
      </div>
    )
  }
}

export default MusicBox;
