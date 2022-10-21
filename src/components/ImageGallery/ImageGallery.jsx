import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images }) {
    //console.log(images);
    return (
        <ul>
            {images.map(item => (
                <ImageGalleryItem key={item.id} item={item} />
            ))}
        </ul>
    );
}

export default ImageGallery;

ImageGallery.propTypes = {
    images: PropTypes.array,
};
