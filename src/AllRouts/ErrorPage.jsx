import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[80vh]">
            <img src="https://i.ibb.co/xXyT3z7/istockphoto-1324403502-612x612.jpg" alt="" />
            <h1 className="text-4xl font-bold py-4">Oops !!!!!</h1>
            <p className="text-lg">something went wrong . please try again</p>
            <Link to='/' className="font-semibold py-2 px-4 bg-sky-400 text-white mt-4 rounded-md">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;