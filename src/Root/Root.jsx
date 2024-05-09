import { Outlet } from "react-router-dom";
import Footer from "../Componants/Footer/Footer";
import Navbar from "../Componants/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="max-w-[1180px] mx-auto px-5 md:px-0 my-12">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;