import banner from '../../assets/images/banner.webp';
const Banner = () => {
    return (
        <div>
            <div className='absolute top-0 left-0 border-2 border-green-600 w-full'>
                <img className='w-full' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;