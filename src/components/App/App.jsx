import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { Conteiner, Gallery } from './App.styled';

class App extends Component {
  state = {
    image: null,
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
        <ToastContainer />
      </Conteiner>
    );
  }
}

export default App;
