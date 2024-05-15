/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Slide = ({ image, text, description }) => {
  return (
    <div
      className='w-full overflow-hidden bg-cover bg-no-repeat bg-center h-[455px] md:h-[38rem] rounded-xl'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-6 md:p-20 lg:p-[100px]'>
        <div className=''>
          <h1 className='text-4xl md:w-2/3 font-semibold text-white md:text-5xl lg:text-6xl mb-5'>
            {text}
          </h1>
          <p className="text-base font-semibold text-white md:w-2/3">{description}</p>
          <br />
          <Link to='/createAssignment'>
            <button className='px-5 py-4 mt-4 text-lg font-medium bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
              Create Assignment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;