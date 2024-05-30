import { Helmet } from "react-helmet-async";
import Faq from "../../Pages/Faq/Faq";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Leaflet from "../Leaflet/Leaflet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    StudyBuddy | Home
                </title>
            </Helmet>
            <div>
                <Banner></Banner>
                <Features></Features>
                <Faq></Faq>
                <Leaflet></Leaflet>
            </div>
        </div>
    );
};

export default Home;