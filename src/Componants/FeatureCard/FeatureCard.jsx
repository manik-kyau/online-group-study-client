import { FaArrowRight } from "react-icons/fa";
import PropTypes from 'prop-types';

const FeatureCard = ({feature}) => {
    const {title,description, img} = feature;
    return (
        <div>
            <div className=" bg-base-100 hover:shadow-xl border">
                <img className="h-[300px] md:h-[200px] w-full" src={img} alt="Shoes" />
                <div className="px-4 py-4 text-center">
                    <h2 className="text-xl font-bold pb-2">{title}</h2>
                    <p className="text-base font-medium">{description.slice(0,144)}</p>
                    <div className="flex justify-center text-center">
                        <button className=" flex items-center gap-1 text-base font-extrabold py-3 text-[#23BE0A]">Learn More <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
FeatureCard.propTypes = {
    feature: PropTypes.object.isRequired
}

export default FeatureCard;