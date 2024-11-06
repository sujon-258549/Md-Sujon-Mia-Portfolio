// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import Autoplay CSS

// Import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // Import Autoplay along with Pagination
import { FaProductHunt } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import { ImBlog } from 'react-icons/im';
import { SiStatuspage } from 'react-icons/si';
import './customswiper.css'
import { Project01 } from '../Banner/Project/project01';
import { Project02 } from '../Banner/Project/project02';
import { Project03 } from '../Banner/Project/Project3';
import { Project04 } from '../Banner/Project/Project4';


export default function Project() {
    return (
        <Swiper
            navigation={true}
            slidesPerView={3} // Default number of slides
            // spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 102500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                type: 'bullets',  // This will show the pagination dots (bullets)
            }}
            breakpoints={{
                320: {
                    slidesPerView: 1,

                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            modules={[Pagination, Autoplay, Navigation]} // Ensure Autoplay is included here
            className="mySwiper" style={{ zIndex: '9', paddingBottom: '50px' }}
        >
            {/* Slide 1 */}
            <SwiperSlide>
                <Project01 />
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className='rounded-[15px]'>
                <Project02 />
                {/* <div className="w-full">
                    <a href="https://alternative-product-11.web.app">
                        <div
                            className="overflow-hidden bg-cover bg-center w-full rounded-lg cursor-pointer h-[350px] group"
                            style={{ backgroundImage: 'url("/altranative.jpg")' }}
                        >
                            <div className="flex flex-col justify-center w-full rounded-lg h-full px-8 py-4 transition-opacity duration-700 group-hover:opacity-0 backdrop-blur-sm bg-gray-800/60 opacity-100">
                                <FaProductHunt className='mx-auto text-white text-3xl' />
                                <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">
                                    Alternative Product
                                </h2>
                                <p className='text-white text-sm py-4'>
                                    The Alternative Product Project is a full-stack project...
                                </p>
                                <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase">
                                    <button title="Save" className="mx-auto cursor-pointer flex items-center bg-[#01eeff81] gap-2 hover:bg-lime-900 rounded-md duration-100 px-4 py-2">
                                        <BiCommentDetail className='mx-auto text-2xl text-white' />
                                        <span className="text-sm font-bold pr-1 text-white">Details</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </a>
                </div> */}
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide className='rounded-[15px]'>
                {/* <div className="w-full">
                    <a href="https://unmok-task.web.app">
                        <div
                            className="overflow-hidden bg-cover bg-center w-full rounded-lg cursor-pointer h-[350px] group"
                            style={{ backgroundImage: 'url("https://techtoday.lenovo.com/sites/default/files/styles/original/public/2023-12/product-family.jpg.webp?itok=G24kIif4")' }}
                        >
                            <div className="flex flex-col justify-center w-full rounded-lg h-full px-8 py-4 transition-opacity duration-700 group-hover:opacity-0 backdrop-blur-sm bg-gray-800/60 opacity-100">
                                <SiStatuspage className='mx-auto text-white text-3xl' />
                                <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">
                                    Simple Pagination Fullstack Project
                                </h2>
                                <p className='text-white text-[16px] py-4'>
                                    This project is simple full-stack project with pagination...
                                </p>
                                <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase">
                                    <button title="Save" className="mx-auto cursor-pointer flex items-center bg-[#01eeff81] gap-2 hover:bg-lime-900 rounded-md duration-100 px-4 py-2">
                                        <BiCommentDetail className='mx-auto text-2xl text-white' />
                                        <span className="text-sm font-bold pr-1 text-white">Details</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </a>
                </div> */}
                <Project03></Project03>
            </SwiperSlide>
            {/* Slide 4 */}
            <SwiperSlide className='rounded-[15px]'>
                <Project04></Project04>
                {/* <div className="w-full">
                    <a href="https://aboul-khair-cgut.vercel.app">
                        <div
                            className="overflow-hidden bg-cover bg-center w-full rounded-lg cursor-pointer h-[350px] group"
                            style={{ backgroundImage: 'url("/aboul.jpg")' }}
                        >
                            <div className="flex flex-col justify-center w-full rounded-lg h-full px-8 py-4 transition-opacity duration-700 group-hover:opacity-0 backdrop-blur-sm bg-gray-800/60 opacity-100">
                                <ImBlog className='mx-auto text-white text-3xl' />
                                <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">
                                    Aboul Khair Group
                                </h2>
                                <p className='text-white text-[16px] py-4'>
                                    Abul Khair website is a font website which uses different UI design...
                                </p>
                                <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase">
                                    <button title="Save" className="mx-auto cursor-pointer flex items-center bg-[#01eeff81] gap-2 hover:bg-lime-900 rounded-md duration-100 px-4 py-2">
                                        <BiCommentDetail className='mx-auto text-2xl text-white' />
                                        <span className="text-sm font-bold pr-1 text-white">Details</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </a>
                </div> */}
            </SwiperSlide>
        </Swiper>
    );
}
