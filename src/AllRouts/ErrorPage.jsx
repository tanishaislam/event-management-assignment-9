import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>Oops !!!!!</h1>
            <p>something went wrong . please try again</p>
            <Link to='/'>Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;