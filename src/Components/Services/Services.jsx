import AllServices from "./AllServices";
import PropTypes from 'prop-types';

const Services = ({service}) => {
    return (
        <div>
            <h1 className="mt-20 text-5xl font-bold text-center mb-5 font-norican">Our Services</h1>
            <p className="w-1/5 m-auto text-center mb-14">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quod eaque suscipit iure voluptatem quibusdam quas!</p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mb-20 container mx-auto">
                {
                    service.map(services => <AllServices key={services.id} services ={services}></AllServices>)
                }
            </div>
            
        </div>
    );
};
Services.propTypes = {
    service: PropTypes.array
}
export default Services;