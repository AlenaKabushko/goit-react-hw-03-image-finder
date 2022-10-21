import { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import RequestImg from './Request/Request';
import Searchbar from './Searchbar/Searchbar';

let page = 1;
export class App extends Component {
    state = {
        search: '',
        images: [],
        totalHits: '',
    };

    onSubmit = async search => {
        console.log(search);
        try {
            const { totalHits, hits } = await RequestImg(search, page);
            console.log(hits);

            this.setState({
                images: hits,
                totalHits: totalHits,
                search: search,
            });
        } catch (error) {
            console.log(error);
        }
    };

    onClick = async () => {
        try {
            console.log(this.state.search);
            const { hits } = await RequestImg(this.state.search, (page += 1));
            console.log(hits);

            this.setState({
                images: hits,
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
                <Button onClick={this.onClick} />
            </>
        );
    }
}

// id, webformatURL, largeImageURL
