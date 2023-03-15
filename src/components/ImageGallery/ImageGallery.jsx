import { Component } from 'react';
import { getImage } from 'components/Fetch/Fetch';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
  };

  componentDidUpdate(prevProps) {
    // this.setState({ loading: true });

    if (prevProps.value !== this.props.value) {
      getImage(this.props.value.trim())
        .then(response => {
          return response.json();
        })
        .then(image => {
          this.setState({ image });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
    return (
      <>
        {/* {this.state.loading && <h1>Loading...</h1>} */}
        {this.state.image &&
          this.state.image.hits.map(img => {
            return (
              <ImageGalleryItem
                key={img.id}
                image={img.webformatURL}
                tags={img.tags}
              />
            );
          })}
      </>
    );
  }
}

export default ImageGallery;

//   componentDidUpdate(prevProps) {
//     // console.log('getImage :>> ', getImage());
//     if (prevProps.value !== this.props.value) {
//       this.setState({ status: 'pending', image: null });

//       getImage(this.props.value.trim)
//         .then(response => {
//           response.json();
//         })
//         .then(image => {
//           console.log('image :>> ', image);
//           if (image.status !== null)
//             this.setState({ image, status: 'resolved' });
//         })

//         .catch(error => this.setState({ error, status: 'error' }));
//     }
//   }

//   render() {
//     const { status, error, image } = this.state;

//     if (status === 'pending') return <p>Loading...</p>;

//     if (status === 'resolved') {
//       //   console.log(image.hits);
//       return image.hits.map(img => {
//         <Gallery>
//           <ImageGalleryItem key={img.id} image={img} />;
//         </Gallery>;
//       });
//     }

//     if (status === 'rejected') return <h1>{error}</h1>;
//   }
// }
