import { Formik } from 'formik';
// import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
    Header,
    FormStyled,
    SearchButton,
    FieldStyled,
} from './Searchbar.styled';

// const schema = Yup.object().shape({
//     input: Yup.string().min(5, 'choose anything').required(),
// });

function Searchbar({ onSubmit }) {
    const handleSubmit = values => {
        const { search } = values;
        onSubmit(search);
    };

    return (
        <Header className="searchbar">
            <Formik
                initialValues={{ search: '' }}
                // validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <FormStyled>
                    <SearchButton type="submit" className="button">
                        <span className="button-label"></span>
                    </SearchButton>

                    <FieldStyled
                        className="input"
                        name="search"
                        type="text"
                        // autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    {/* <ErrorMessage name="input" component="div" /> */}
                </FormStyled>
            </Formik>
        </Header>
    );
}

export default Searchbar;

Searchbar.propType = {
    onSubmit: PropTypes.func.isRequired,
};
