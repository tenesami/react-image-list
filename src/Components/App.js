import React, { Component } from 'react';
import unsplash from '../Api/unsplash';
import SearchBar from './SearchBar';

class App extends Component {

  state = {images: []}

 subumitSearch = async (term) => {
    //console.log(data)
    const res = await unsplash.get('/search/photos', {
      params: {query: term },
    });
      //console.log(this)
      this.setState({images: res.data.results})
  
  }
  render() {
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
      <SearchBar userInput={this.subumitSearch}/>
      Found: {this.state.images.length} images
    </div>
    )
  }
}
export default App;



