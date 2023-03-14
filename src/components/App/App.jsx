import { Component } from 'react';

import { getImage } from 'components/Fetch/Fetch';
import Searchbar from 'components/Searchbar/Searchbar';
import { Conteiner } from './App.styled';
import ImageGallery from 'components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    image: null,
    textSearch: '',
  };

  handleSubmitApp = textSearch => {
    this.setState({ textSearch });
  };

  // componentDidUpdate = e => {
  //   e.preventDefault();
  //   getImage(this.props.value.trim)
  //     .then(response => response.json())
  //     .then(image => this.setState({ image }));
  //   .catch()
  //   .finally();
  // };

  render() {
    return (
      <Conteiner>
        <Searchbar onSearch={this.handleSubmitApp} />
        <ImageGallery value={this.state.textSearch} />
      </Conteiner>
    );
  }
}

export default App;

// fetch(`${BASE_URL}?key=${API_KEY}&q=${searchText}&image_type=photo`);
