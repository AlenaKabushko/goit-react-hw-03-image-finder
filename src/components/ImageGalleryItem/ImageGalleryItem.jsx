import PropTypes from 'prop-types';

function ImageGalleryItem({ item }) {
    const { webformatURL, tags } = item;
    return (
        <li>
            <img src={webformatURL} alt={tags} />
        </li>
    );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    item: PropTypes.object,
};
