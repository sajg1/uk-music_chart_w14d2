import React from 'react';
import Song from './Song';

const ChartList = (props) => {

  const chartList = props.chart.map((song, index) => {
    return(
      <Song song={song} key={index} />
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
