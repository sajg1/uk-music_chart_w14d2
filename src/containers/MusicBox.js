import React, {Component} from 'react';
import ChartList from '../components/ChartList'

class MusicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ukChart: []
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const ukChart = data.feed.entry;
        this.setState({ukChart})
      })
      .catch(err => console.err)
  }

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
