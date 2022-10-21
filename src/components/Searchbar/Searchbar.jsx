import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import PropTypes from 'prop-types';

// const schema = Yup.object().shape({
//     input: Yup.string().min(5, 'choose anything').required(),
// });

function Searchbar({ onSubmit }) {
    const handleSubmit = values => {
        const { search } = values;
        onSubmit(search);
    };

    return (
        <header className="searchbar">
            <Formik
                initialValues={{ search: '' }}
                // validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <Field
                        className="input"
                        name="search"
                        type="text"
                        // autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <ErrorMessage name="input" component="div" />
                </Form>
            </Formik>
        </header>
    );
}

export default Searchbar;

Searchbar.propType = {
    onSubmit: PropTypes.func.isRequired,
};
