import PropTypes from 'prop-types';
import { ItemStyled, ItemImgStyled } from './ImageGalleryItem.styled';

function ImageGalleryItem({ item }) {
    const { webformatURL, tags } = item;
    return (
        <ItemStyled>
            <ItemImgStyled src={webformatURL} alt={tags} width={200} />
        </ItemStyled>
    );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    item: PropTypes.object,
};
