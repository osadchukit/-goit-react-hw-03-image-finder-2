import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { Conteiner, Gallery } from './App.styled';

class App extends Component {
  state = {
    textSearch: '',
  };

  handleSubmitApp = textSearch => this.setState({ textSearch });

  render() {
    return (
      <Conteiner>
        <Searchbar onSearch={this.handleSubmitApp} />
        <Gallery>
          <ImageGallery value={this.state.textSearch} />
        </Gallery>
        <Toaster position="top-right" reverseOrder={false} />
      </Conteiner>
    );
  }
}

export default App;
