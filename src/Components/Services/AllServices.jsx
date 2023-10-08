import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllServices = ({services}) => {
    const {id, name, image, price, description} = services;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl md:h-full hover:shadow-pink-400 hover:shadow-2xl hover:transition-shadow hover:duration-100">
            <figure><img  src={image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-3xl font-bold font-cormorant text-center">{name}</h2>
                <p className='font-semibold'>{description}</p>
                <p><span className='font-semibold'>Price:</span> {price} $</p>
                <div className="card-actions justify-center">
                <Link to={`/service/${id}`}><button className="btn btn-primary bg-pink-500 text-white border-pink-400">View Details</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};
AllServices.propTypes = {
    services: PropTypes.object
}
export default AllServices;