import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Header = () => {
    const service = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Services service ={service}></Services>
        </div>
    );
};

export default Header;