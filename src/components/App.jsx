import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import RequestImg from './Request/Request';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
    state = {
        images: [],
        totalHits: '',
    };

    onSubmit = async search => {
        console.log(search);
        try {
            const { totalHits, hits } = await RequestImg(search);
            console.log(hits);

            this.setState({
                images: hits,
                totalHits: totalHits,
            });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { images } = this.state;

        return (
            <>
                <Searchbar onSubmit={this.onSubmit} />
                <ImageGallery images={images} />
            </>
        );
    }
}

// id, webformatURL, largeImageURL
