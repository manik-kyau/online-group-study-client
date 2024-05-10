import { Outlet } from "react-router-dom";
import Footer from "../Componants/Footer/Footer";
import Navbar from "../Componants/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="max-w-[1180px] mx-auto px-5 lg:px-0">
                <Navbar></Navbar>
                <div className="min-h-[calc(100vh-258px)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;