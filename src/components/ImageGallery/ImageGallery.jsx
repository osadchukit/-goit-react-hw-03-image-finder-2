import { getImage } from 'components/Fetch/Fetch';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps) {
    // console.log('getImage :>> ', getImage());
    if (prevProps.value !== this.props.value) {
      this.setState({ status: 'pending', image: null });

      getImage(this.props.value.trim)
        .then(response => response.json())
        .then(image => {
          console.log('image :>> ', image);
          if (image.status !== null)
            this.setState({ image, status: 'resolved' });
        })

        .catch(error => this.setState({ error, status: 'error' }));
    }
  }

  render() {
    const { status, error, image } = this.state;

    if (status === 'pending') return <p>Loading...</p>;

    if (status === 'resolved') {
      console.log(image);
      return image.hits.map(img => {
        <Gallery>
          <ImageGalleryItem key={img.id} image={img} />;
        </Gallery>;
      });
    }

    if (status === 'rejected') return <h1>{error}</h1>;
  }
}

export default ImageGallery;
