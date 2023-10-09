import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Footer from "./Footer";
import SomeService from "../SomeService/SomeService";
import HomeContact from "../SomeService/HomeContact";

const Header = () => {
    const service = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Services service ={service}></Services>
            <SomeService></SomeService>
            <HomeContact></HomeContact>
            <Footer></Footer>
        </div>
    );
};

export default Header;