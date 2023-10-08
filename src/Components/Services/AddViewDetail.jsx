
import PropTypes from 'prop-types';
const AddViewDetail = ({details}) => {
    const { name, image, price, Details} = details;
    return (
        <div className="container mx-auto mt-20">
            <div className="card grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  bg-base-100 shadow-xl">
            <figure><img className="h-full w-full" src={image}/></figure>
            <div className="card-body">
                <h2 className="text-4xl font-cormorant font-bold pb-5">{name}</h2>
                <p className="text-xl">Price: {price} $</p>
                <p className="max-w-xl text-lg font-semibold pb-5">Details: {Details}</p>
                <div className="card-actions ">
                <button className="btn btn-primary bg-pink-400 border-pink-400 text-white mb-10">Go back home</button>
                </div>
            </div>
            </div>
        </div>
    );
};
AddViewDetail.propTypes = {
    details: PropTypes.object
}

export default AddViewDetail;