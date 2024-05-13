
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from '../Slide/Slide';
const Banner = () => {
    return (
        <div className='my-12'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide 
                    image={banner1}
                    text="Join Our Dynamic Group Study Sessions"
                    description="Join Our Dynamic Group Study Sessions! invites you to become part of an engaging and collaborative learning experience. Our sessions are designed to foster interaction, exchange of ideas, and collective problem-solving. By joining our dynamic groups, you'll have the opportunity to connect with peers, share knowledge, and accelerate your learning journey."
                    ></Slide>
                </SwiperSlide>

                <SwiperSlide>
                    <Slide 
                    image={banner2}
                    text="Dive into Group Study Excellence!"
                    description="Dive into Group Study Excellence! immerses you in a transformative approach to learning. Our program cultivates an environment where collaboration meets excellence, empowering you to achieve your academic goals with confidence. Through dynamic group study sessions, you'll dive deep into course material, explore diverse perspectives, and tackle challenging concepts together."
                    ></Slide>
                </SwiperSlide>

                <SwiperSlide>
                    <Slide 
                    image={banner3}
                    text=" Harness the Power of Group Study Today!"
                    description="Harness the Power of Group Study Today! invites you to seize the opportunity to supercharge your learning journey through collaborative study. In today's fast-paced world, success often hinges on not just what you know, but how effectively you can apply and share that knowledge. Our group study sessions provide the ideal platform to harness the collective intelligence of your peers, enabling you to deepen your understanding."
                    ></Slide>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;