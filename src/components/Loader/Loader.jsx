import { BallTriangle } from 'react-loader-spinner';

function Loader() {
    return (
        <BallTriangle
            height={70}
            width={70}
            radius={5}
            color="#ff5405"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle={{ justifyContent: 'center' }}
            visible={true}
        />
    );
}

export default Loader;
