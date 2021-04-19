import _ from 'lodash';
import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyB7OHlS45ERc6ZgwL79FD-dQkSsgt8rfp0';



class App extends Component {
  constructor() {
    super();

    this.state = { 
      videos: [],
      selectedVideo: null
     };
     this.videoSearch('chess');


  }

  videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
    // this.setState({videos});
})
  }


  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)

      return (
    <div>
      
      <SearchBar onSearchTermChange={videoSearch}/>
      <div className="sections">

      <VideoDetail video={this.state.selectedVideo} />
      <VideoList 
      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
      </div>
    </div>
  );
  }
}

export default App;
