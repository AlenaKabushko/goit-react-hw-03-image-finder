import { Component } from 'react';
import { Box } from './Box';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import RequestImg from './Request/Request';
import Searchbar from './Searchbar/Searchbar';

let page = 1;
export class App extends Component {
    state = {
        search: '',
        images: [],
        totalHits: 0,
        loading: Boolean,
    };

    onSubmit = async search => {
        console.log(search);

        this.setState({
            loading: true,
        });
        try {
            const { totalHits, hits } = await RequestImg(search, page);
            console.log(hits);

            this.setState({
                images: hits,
                totalHits: totalHits,
                search: search,
                loading: false,
            });
        } catch (error) {
            console.log(error);
        }
    };

    onClick = async () => {
        this.setState({
            loading: true,
        });
        try {
            console.log(this.state.search);
            const { hits } = await RequestImg(this.state.search, (page += 1));
            console.log(hits);
            console.log(page);

            this.setState(prevState => ({
                images: [...prevState.images, ...hits],
                loading: false,
            }));
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { images, loading, totalHits } = this.state;

        let visual = '';
        if (loading === true) {
            visual = (
                <>
                    <ImageGallery images={images} />
                    <Loader />
                </>
            );
        } else if (loading === false && images.length !== totalHits) {
            visual = (
                <>
                    <ImageGallery images={images} />
                    <Button onClick={this.onClick} />
                </>
            );
        } else if (images.length === totalHits) {
            visual = (
                <>
                    <ImageGallery images={images} />
                </>
            );
        }

        return (
            <Box
                display="grid"
                gridTemplateColumns="1fr"
                gridGap="16px"
                pb="24px"
            >
                <Searchbar onSubmit={this.onSubmit} />
                {visual}
            </Box>
        );
    }
}

// id, webformatURL, largeImageURL
