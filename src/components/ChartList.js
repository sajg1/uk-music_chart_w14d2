import React from 'react';
import Song from './Song';
import './ChartList.css'

const ChartList = (props) => {

  const chartList = props.chart.map((song, index) => {
    return(
      <Song song={song} key={index} position={index + 1}/>
    );
  });

  return(
    <div>
      <h3>Current UK Top 20</h3>
      <ul>
        {chartList}
      </ul>
    </div>
  );
}

export default ChartList;
