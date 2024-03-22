// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops..!!</h2>
            <p>Your page not found</p>
            <Link to='/'><button>Back to Home</button></Link>
        </div>
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;