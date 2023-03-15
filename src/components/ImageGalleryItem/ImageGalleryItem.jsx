import {
  ImageGalleryItems,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, tags }) => {
  return (
    <ImageGalleryItems>
      <ImageGalleryItemImage src={image} alt={tags} />
    </ImageGalleryItems>
  );
};
