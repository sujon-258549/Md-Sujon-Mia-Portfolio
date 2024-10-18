// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// Import required modules
import { Pagination } from 'swiper/modules';
import { FaProductHunt } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import { ImBlog } from 'react-icons/im';
import { SiStatuspage } from 'react-icons/si';

export default function Project() {
    return (
        <>
            <Swiper
                slidesPerView={3} // Default number of slides
                spaceBetween={30}
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // when window width is >= 640px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='rounded-[15px]'>
                    <div className="w-full" >
                        <a href="https://alternative-product-11.web.app" >

                            <div
                                className="overflow-hidden bg-cover bg-center w-full rounded-lg cursor-pointer h-[350px] group"
                                style={{
                                    backgroundImage:
                                        'url("/altranative.jpg")', borderRadius: '10px'
                                }}
                            >
                                <div className="flex flex-col justify-center w-full rounded-lg h-full px-8 py-4 transition-opacity duration-700 group-hover:opacity-0 backdrop-blur-sm bg-gray-800/60 opacity-100">
                                    <FaProductHunt className='mx-auto text-white text-3xl' />
                                    <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">
                                        Alternative Product
                                    </h2>
                                    <p className='text-white text-sm py-4'>
                                        The Alternative Product Project is a full-stack project. In this project, functionalities such as adding, updating, and deleting items are implemented.
                                    </p>
                                    <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase ">

                                        <button title="Save" class="mx-auto cursor-pointer flex items-center fill-lime-400 bg-[#01eeff81] gap-2 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 px-4 py-2">

                                            <BiCommentDetail className='mx-auto  text-2xl text-white' />
                                            <span className="text-sm  font-bold pr-1 text-white">Details</span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='rounded-[15px]'>
                    <div className="w-full">
                        <a href="https://unmok-task.web.app">

                            <div
                                className="overflow-hidden  bg-cover bg-center w-full rounded-lg cursor-pointer h-[350px] group"
                                style={{
                                    backgroundImage:
                                        'url("https://techtoday.lenovo.com/sites/default/files/styles/original/public/2023-12/product-family.jpg.webp?itok=G24kIif4")', borderRadius: '10px'
                                }}
                            >
                                <div className="flex flex-col justify-center w-full rounded-lg h-full px-8 py-4 transition-opacity duration-700 group-hover:opacity-0 backdrop-blur-sm bg-gray-800/60 opacity-100">
                                    <SiStatuspage className='mx-auto text-white text-3xl' />
                                    <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">
                                        Simple Paginaction Fullstrack Project
                                    </h2>
                                    <p className='text-white text-[16px] py-4'>
                                        This project is simple full-stack project with pagination, which includes search, sort, and filter functionalities. The pagination is implemented to handle the end of the dataset efficiently.
                                    </p>
                                    <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase ">

                                        <button title="Save" class="mx-auto cursor-pointer flex items-center fill-lime-400 bg-[#01eeff81] gap-2 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 px-4 py-2">

                                            <BiCommentDetail className='mx-auto  text-2xl text-white' />
                                            <span className="text-sm  font-bold pr-1 text-white">Details</span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                </SwiperSlide>

                <SwiperSlide className='rounded-[15px]'>
                    <div className="w-full">
                        <a href="https://aboul-khair-cgut.vercel.app">

                            <div
                                className="overflow-hidden  bg-cover bg-center w-full rounded-lg cursor-pointer h-[350px] group"
                                style={{
                                    backgroundImage:
                                        'url("/aboul.jpg")', borderRadius: '10px'
                                }}
                            >
                                <div className="flex flex-col justify-center w-full rounded-lg h-full px-8 py-4 transition-opacity duration-700 group-hover:opacity-0 backdrop-blur-sm bg-gray-800/60 opacity-100">
                                    <ImBlog className='mx-auto text-white text-3xl' />
                                    <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">
                                        Aboul Khair Group
                                    </h2>
                                    <p className='text-white text-[16px] py-4'>
                                        Abul Khair website is a font website which uses different UI design and functionality
                                    </p>
                                    <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase ">

                                        <button title="Save" class="mx-auto cursor-pointer flex items-center fill-lime-400 bg-[#01eeff81] gap-2 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 px-4 py-2">

                                            <BiCommentDetail className='mx-auto  text-2xl text-white' />
                                            <span className="text-sm  font-bold pr-1 text-white">Details</span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                </SwiperSlide>







            </Swiper>
        </>
    );
}



// const Project = () => {
//     return (
//         <section>

//             <dev className="flex flex-wrap justify-center gap-10">
//                 <div className="w-[400px]">
//                     <div
//                         className="overflow-hidden bg-cover w-full rounded-lg cursor-pointer h-[350px] group"
//                         style={{
//                             backgroundImage:
//                                 'url("https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")'
//                         }}
//                     >
//                         <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
//                             <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">
//                                 Ton’s of mobile mockup
//                             </h2>
//                             <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase ">
//                                 Detail
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//             </dev>
//         </section>
//     );
// };

// export default Project;
//
//
//f